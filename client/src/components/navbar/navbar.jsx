import { useEffect, useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { getActivities, getFilter, getOrderBy } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';


function Navbar({handleChange, handleSubmit}) {
  const allActivities = useSelector((state)=>state.allActivities);
  const dispatch = useDispatch();
  const [fil, setFil] = useState({
    funcion:''
  })

  useEffect(()=>{
    dispatch(getActivities());
  },[dispatch])


function handleFilter(e){
  
  if(e.target.value === 'actividad'){
    setFil({...fil, funcion: filtradoActividad()})
  }else{
    setFil({...fil, funcion: filtradoContinente()})
  }
} 

function handleChangeFilter(e){
  e.preventDefault()
  dispatch(getFilter(e.target.value, e.target.name))
}

function filtradoContinente(){
  return(
    <select name='continente' style={{width:'150px'}} defaultValue={'ninguno'} onChange={handleChangeFilter}>
          <option value="ninguno"  >ninguno</option>
          <option value="South America"  >South America</option>
          <option value="North America"  >North America</option>
          <option value="Antarctica"  >Antarctica</option>
            <option value="Europe"  >Europa</option>
            <option value="Africa"  >Africa</option>
            <option value="Oceania"  >Oceania</option>
            <option value="Asia"   >Asia</option>
        </select>
  )
}
function filtradoActividad(){
  return(
    <select name='actividad' style={{width:'150px'}} defaultValue={'ninguno'} onChange={handleChangeFilter}>
          <option value="ninguno"  >ninguno</option>
          {allActivities?.map((activitie)=>{
            return(
              <option value= {activitie.name}  key={activitie.name} >{activitie.name}</option>
            )
          })}
        </select>
  )
}


function handleChangeOrderBy(e){
  e.preventDefault()
  dispatch(getOrderBy(e.target.value))
}

function recargar(){
  window.location.reload()
}
  return (
    <>
      
      <div className='nav-bar'>
      <div><Link to = {`/Home`} className='link1' onClick={recargar}> Inicio  </Link></div>
      <div><Link to = {`/form`} className='link1'>  Crear actividad  </Link></div>
       <div style={{color:'white'}}> <span className='span'>Filtrar por:   </span>
        continente<input type="radio"  value='continente' name= 'fil' onChange={handleFilter} />
        actividad<input type="radio"  value='actividad' name= 'fil' onChange={handleFilter} />
        </div>
        {fil.funcion}
       
        <div style={{color:'white'}}>ordenar por:{' '}    
         <select defaultValue={'ninguno'} onChange={handleChangeOrderBy}>
          <option value="ninguno">ninguno</option>
          <option value="nasc">nombre A..Z</option>
          <option value="ndes">nombre Z..A</option>
          <option value="pasc">poblacion ↑</option>
          <option value="pdes">poblacion ↓</option>
        </select></div>
      <form  onChange= {handleChange}>
        <input className='busqueda' placeholder='busqueda' type = 'search'/>
        <button className='boton' type= 'submit' onClick= {handleSubmit} >buscar </button>
      </form>
      <div><Link to = {`/`} className='link1'>  Salir  </Link></div>
      
      </div>
    </>
  )
}

export default Navbar