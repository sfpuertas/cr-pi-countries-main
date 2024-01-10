import { useState } from 'react'
import './cards.css'
import Card from '../card/card'

function Cards({allCountries}) {
  const countriesList = allCountries;
  if(countriesList.length == 0){
    return(
    <div className='no'>
      <h1>no se encontraron paises</h1>
      </div>
      )
  }

  return (
      <div className='card-list'>
         {countriesList?.map((countrie) =>(
          <Card countrie= {countrie} key={countrie.id}/>))} 
         
      </div>
  )
}

export default Cards