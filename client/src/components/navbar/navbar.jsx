import { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'


function Navbar({handleChange, handleSubmit}) {

  return (
    <>
      
      <div className='nav-bar'>
      <div><Link to = {`/home`} className='link1'>  Home  </Link></div>
      <div><Link to = {`/form`} className='link1'>  Crear actividad  </Link></div>
        <span className='span'>Filtrados:</span><select>
          <option value="ninguno">ninguno</option>
          <option value="america">america</option>
          <option value="europa">europa</option>
        </select>
        <select>
          <option value="ninguno">ninguno</option>
          <option value="museos">museos</option>
          <option value="parques">parques</option>
        </select>
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