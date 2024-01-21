
import { useDispatch, useSelector } from 'react-redux'
import './form.css'
import { getActivities, getCountries, postForm} from '../../redux/actions'
import { useState, useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Form() {
  const allCountries = useSelector((state)=>state.allCountries);
  const allActivities = useSelector((state)=>state.allActivities);
const dispatch = useDispatch();
const navigate = useNavigate();




useEffect(()=>{
  dispatch(getCountries());
  dispatch(getActivities())
},[])

  const [habilitado, setHabilitado] = useState({
    ok : true});


  const [input, setInput] = useState ({
    name: '',
    dificultad: '',
    duracion: '0.0',
    temporada: '',
    paises: []

  })

  const [errors, setErrors] = useState({
    name: '1',
    dificultad: '1',
    duracion: '1',
    temporada: '1',
    paises:'1',

    })

  
  function validate(input){
    const aux = input
    const acti = [...allActivities]

    const errors = {};
    var esta = ''
    if(aux.temporada === ''){errors.temporada = 'debe elegir una temporada'}else{errors.temporada = ''};
    if(aux.duracion === '0.0'){errors.duracion = 'debe ingresar la duracion'}else{errors.duracion = ''};
    if(!Number(aux.duracion.split('.')[0])){if(errors.duracion === ''){errors.duracion = 'la hora debe ser un numero'}};
    if(!Number(aux.duracion.split('.')[1]) || Number(aux.duracion.split('.')[1] ) < 0 || Number(aux.duracion.split('.')[1]) > 59){if(errors.duracion === ''){errors.duracion = 'los minutos deben ser un numero entre 0 y 59'}};
    console.log(aux.paises)
    if(aux.dificultad === ''){errors.dificultad = 'debe elegir una dificultad'}else{errors.dificultad = ''};
    if(aux.paises.length === 0){errors.paises = 'debe asignar al menos un pais'}else{errors.paises = ''};
    if(allActivities.length > 0){esta = acti.find((act)=>{ if(act.name === aux.name){return (aux.name)}})}
    if (esta != undefined){
      errors.name = 'esta actividad ya existe'
    }else{errors.name = ''}
    if(aux.name === ''){errors.name = 'debe ingresar un nombre'}
    if(errors.name === '' && errors.dificultad === '' && errors.duracion === '' && errors.temporada === '' && errors.paises === ''){
      setHabilitado({ok : false});
    }
    return(errors)
    
    }
  

  function handleSubmit(e){
    e.preventDefault();
    alert("actividad creada con exito");
    dispatch(postForm(input));
    navigate('/Home');
  }

  function handleChange (e){
    setHabilitado({ok : true});
    var esta = 'false'
    const aux = {...input}
    if(e.target.name === 'paises'){
      if(aux.paises?.includes(e.target.value)){
        esta =true;
        console.log('esta')
        setInput({
          ...input,
          paises: aux.paises.filter((pais)=>e.target.value != pais)
        })
      }else{
        console.log('no esta')
      setInput({...input,
      [e.target.name]:  [...input.paises, e.target.value]
      })}
    }

    if(e.target.name === 'hora'){
      let auxi = e.target.value + '.'+ aux.duracion.split('.')[1];


        setInput({
          ...input,
          duracion: auxi})
      }
    if(e.target.name === 'minutos'){
      let auxi = aux.duracion.split('.')[0] + '.'+ e.target.value;
          setInput({
            ...input,
            duracion: auxi })
          }
    if(e.target.name === 'temporada'){
        setInput({
                ...input,
                [e.target.name]: e.target.value})
        }
        if(e.target.name === 'dificultad'){
          setInput({
                  ...input,
                  [e.target.name]: e.target.value})
          }

          if(e.target.name === 'name'){
            setInput({
                    ...input,
                    [e.target.name]: e.target.value})
            }
            

          if(e.target.name === 'hora'){
            setErrors(validate({
              ...input,
              duracion: e.target.value + '.'+ aux.duracion.split('.')[1]}));
          }else{
            if(e.target.name === 'minutos'){
              setErrors(validate({
                ...input,
                duracion: aux.duracion.split('.')[0] + '.'+ e.target.value}))
            }else{
              if(e.target.name === 'paises'){
                if(esta === true){
                  setErrors(validate({
                    ...input,
                    paises: aux.paises.filter((pais)=>e.target.value != pais)
                  }))
                }else{
                setErrors(validate({
                  ...input,
                  [e.target.name]: [...input.paises, e.target.value]}));
                }}
              else{
        setErrors(validate({
          ...input,
          [e.target.name]: e.target.value}));
        }
      }
      }    
        
      
  }
 
  
  return (
           
      <div style={{paddingLeft:'50px 50px 50px 50px', marginLeft:'250px', width:'800px', height:'800px', border: '10px solid white', borderRadius:'10px', backgroundColor:'black'}}>
        <h1 style={{color:'white'}}>INGRESE LA INFORMACION DE LA NUEVA ACTIVIDAD</h1>
        <form  className='form' onSubmit={handleSubmit}>
        <div>


        <div style={{width: '400px', height:'80px', fontSize:'20px'}}>
          <label >Nombre: </label>
          <input name= 'name' placeholder='Nombre..' value={input.value} onChange={handleChange}/>
          <div style={{color:'red', fontSize:'15px', paddingBottom:'40px'}}>{errors.name}</div>
        </div>
        

        <div style={{width: '400px', height:'80px', fontSize:'20px'}}>
          <label> Dificultad: </label>
          <select name= 'dificultad' value={input.value} onChange={handleChange}>
          <option value=''>ninguno</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          </select>
          <div style={{color:'red', fontSize:'15px', paddingBottom:'40px'}}>{errors.dificultad}</div>
        </div>

        <div style={{width: '400px', height:'80px', fontSize:'20px'}}>
          <label> Duracion: </label>
          <input name= 'hora' placeholder='0' style={{width:'20px', textAlign:'center'}} value={input.value} onChange={handleChange}/>:
          <input name= 'minutos' placeholder='00' style={{width:'20px', textAlign:'center'}} value={input.value} onChange={handleChange}/>hs
          <div style={{color:'red', fontSize:'15px', paddingBottom:'40px'}}>{errors.duracion}</div>
        </div>
  
        <div style={{width: '400px', height:'80px', fontSize:'20px'}}>
          <label>Temporada:  </label>
          <select name= 'temporada'  value={input.value} onChange={handleChange}>
          <option value=''>ninguno</option>
          <option value='verano'>verano</option>
          <option value='otoño'>otoño</option>
          <option value='invierno'>invierno</option>
          <option value='primavera'>primavera</option>
          </select>
          <div style={{color:'red', fontSize:'15px', paddingBottom:'40px'}}>{errors.temporada}</div>
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
<div style={{color:'red', fontSize:'15px', paddingBottom:'40px'}}>{errors.paises}</div>
</div>


        

        <div style={{display:'flex', marginLeft:'180px', paddingTop:'100px'}}>

        <div ><button style= {{width:'150px', heigth: "200px", fontSize:'20px'}} disabled={habilitado.ok} type='submit' >crear actividad</button></div>
        <div style={{paddingLeft:'30px'}}><Link to = {'/Home'}><button style= {{width:'150px', heigth: "200px", fontSize:'20px'}}>cancelar</button></Link></div>
        </div>

        </form>
      </div>
  )
}



export default Form