import { useState } from 'react'
import {Link} from 'react-router-dom'
import './card.css'

function Card({countrie}) {
const{name, continents, id, flags} = countrie;

  return (
    
      <div className='card-container'  >
        <Link style={{textDecorationLine: 'none', textDecorationColor: 'none'}} to = {`/home/${id}`}>
          <div className='imagen' style={{backgroundImage: `url(${flags})`, backgroundSize: '300px 150px' }}>
            </div>
        <div className='datos'>
        <p>{name}</p>
        <p>{continents}</p>
      </div>
      </Link>
      </div>
    
  )
}

export default Card