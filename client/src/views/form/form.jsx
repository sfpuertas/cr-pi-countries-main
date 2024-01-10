
import { useDispatch, useSelector } from 'react-redux'
import './form.css'
import { getCountries, postForm} from '../../redux/actions'
import { useState, useEffect } from 'react'

function Form() {
  const allCountries = useSelector((state)=>state.allCountries);
const dispatch = useDispatch();




useEffect(()=>{
  dispatch(getCountries());
},[dispatch])


  const [input, setInput] = useState ({
    name: '',
    dificultad: '',
    duracion: 0,
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
    dispatch(postForm(input))
  }

  function handleChange(e){
    e.preventDefault();
    if(e.target.name === 'paises'){
      setInput({...input,
      [e.target.name]:  [e.target.value, ...input.paises]
      })
    }else{
    setInput({
      ...input,
      [e.target.name]: e.target.value})
    }

      validate({
        ...input,
        [e.target.name]: e.target.value})
  }

  return (
      <div style={{width:'500px', height:'500px'}}>
        <form  className='form' onSubmit={handleSubmit}>


        <div>
          <label>Nombre: </label>
          <input name= 'name' value={input.value} onChange={handleChange}/>
        </div>

        <div>
          <label> Dificultad: </label>
          <select name= 'dificultad' value={input.value} onChange={handleChange}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          </select>
        </div>

        <div>
          <label> Duracion: </label>
          <input name= 'duracion' value={input.value} onChange={handleChange}/>
        </div>
        <div>
          <label>Temporada:</label>
          <select name= 'temporada' value={input.value} onChange={handleChange}>
          <option value='verano'>verano</option>
          <option value='otoño'>otoño</option>
          <option value='invierno'>invierno</option>
          <option value='primavera'>primavera</option>
          </select>
        </div>

<div  style= {{width:'200px', heigth: "300px"}} >

<fieldset >
  <legend>selecionar paises:</legend>
<div style={{overflowY:'scroll', maxHeight: '150px'}}>

  { allCountries.map((elemento, index)=>{
    return(
      <div>
    <input type="checkbox" id={index} value={elemento.id} name= 'paises' onChange={handleChange} />
    <label>{elemento.name}</label>
  </div>
    )
  })}
 </div>
</fieldset>
</div>

        <div><button type='submit' >crear actividad</button></div>


        </form>
      </div>
  )
}



export default Form