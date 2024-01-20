
import { useDispatch, useSelector } from 'react-redux'
import './form.css'
import { getCountries, postForm} from '../../redux/actions'
import { useState, useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Form() {
  const allCountries = useSelector((state)=>state.allCountries);
const dispatch = useDispatch();
const navigate = useNavigate();



useEffect(()=>{
  dispatch(getCountries());
},[dispatch])


  const [input, setInput] = useState ({
    name: '',
    dificultad: '',
    duracion: '0.0',
    temporada: '',
    paises: []

  })

  const [error, setError] = useState({
    pais:'',
    capital: '',
    id:''
  })

  const validate = (input)=>{
      if (input){
        console.log('este es');
        setError({...error, pais:'el pais no existe'})
      }else{
        console.log('este no es');
        setError({...error, pais:''})
      }
  }

  function handleSubmit(e){
    e.preventDefault();
    alert("actividad creada con exito");
    dispatch(postForm(input));
    navigate('/Home');
  }

  function handleChange(e){
    if(e.target.name === 'paises'){
      if(input.paises.includes(e.target.value)){
        setInput({
          ...input,
          [input.paises]: input.paises.filter((pais)=>{e.target.value != pais})
        }
        )
      }else{
      setInput({...input,
      [e.target.name]:  [e.target.value, ...input.paises]
      })}
    }else{
      if(e.target.name === 'hora'){
        setInput({
          ...input,
          duracion: e.target.value + '.'+input.duracion.split('.')[1]})
      }else{
        if(e.target.name === 'minutos'){
          setInput({
            ...input,
            duracion:  input.duracion.split('.')[0] + '.'+ e.target.value})
        }else{

          setInput({
            ...input,
            [e.target.name]: e.target.value})
          }
        }
      }

      validate({
        ...input,
        [e.target.name]: e.target.value})
  }
 
  
  return (
           
      <div style={{paddingLeft:'50px 50px 50px 50px', marginLeft:'250px', width:'800px', height:'800px', border: '10px solid white', borderRadius:'10px', backgroundColor:'black'}}>
        <h1 style={{color:'white'}}>INGRESE LA INFORMACION DE LA NUEVA ACTIVIDAD</h1>
        <form  className='form' onSubmit={handleSubmit}>
        <div>


        <div style={{width: '400px', height:'50px', fontSize:'20px'}}>
          <label >Nombre: </label>
          <input name= 'name' placeholder='Nombre..' value={input.value} onChange={handleChange}/>
        </div>

        <div style={{width: '400px', height:'50px', fontSize:'20px'}}>
          <label> Dificultad: </label>
          <select name= 'dificultad' value={input.value} onChange={handleChange}>
          <option value='ninguno'>ninguno</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          </select>
        </div>

        <div style={{width: '400px', height:'50px', fontSize:'20px'}}>
          <label> Duracion: </label>
          <input name= 'hora' placeholder='0' style={{width:'20px', textAlign:'center'}} value={input.value} onChange={handleChange}/>:
          <input name= 'minutos' placeholder='00' style={{width:'20px', textAlign:'center'}} value={input.value} onChange={handleChange}/>hs
        </div>
        <div style={{width: '400px', height:'50px', fontSize:'20px'}}>
          <label>Temporada:  </label>
          <select name= 'temporada'  value={input.value} onChange={handleChange}>
          <option value='ninguno'>ninguno</option>
          <option value='verano'>verano</option>
          <option value='otoño'>otoño</option>
          <option value='invierno'>invierno</option>
          <option value='primavera'>primavera</option>
          </select>
        </div>
   </div>     

<div  style= {{width:'300px', heigth: "500px"}} >

<fieldset >
  <legend style={{fontSize:'20px'}}>selecionar paises:</legend>
<div style={{overflowY:'scroll', maxHeight: '300px'}}>

  { allCountries.map((elemento, index)=>{
    return(
      <div key= {elemento.name}>
    <input type="checkbox"  id={index} value={elemento.id} name= 'paises' onChange={handleChange} />
    <label>{elemento.name}</label>
  </div>
    )
  })}
 </div>
</fieldset>
</div>

        

        <div style={{display:'flex', marginLeft:'180px', paddingTop:'100px'}}>
       
        <div ><button style= {{width:'150px', heigth: "200px", fontSize:'20px'}} type='submit' >crear actividad</button></div>
        <div style={{paddingLeft:'30px'}}><Link to = {'/Home'}><button style= {{width:'150px', heigth: "200px", fontSize:'20px'}}>cancelar</button></Link></div>
        </div>

        </form>
      </div>
  )
}



export default Form