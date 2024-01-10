
import {useParams} from 'react-router-dom'
import './detail.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../redux/actions';

function Detail() {
  const {id} = useParams();
  const detail = useSelector((state)=>state.detail);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getDetail(id));
  },[dispatch])
  


  return (
      <div className='detail'>
        <div><img src={detail.flags} alt="bandera"/></div>
        <div>Nombre: {detail.name}</div>
        <div>Continente: {detail.continents}</div>
        <div>Capital: {detail.capital}</div>
        <div>Area: {detail.area}</div>
        <div>Sub Region: {detail.subregion}</div>
        <div>Poblacion: {detail.population}</div>
        <div>actividades:</div>
        <div className='act'>
          {
        detail.Activities?.map((e) => {
                    return (
                       <div className='actividades' key={e.name}> name: {e.name}<br/>
                        dificultad: {e.dificultad}<br/>
                        duracion: {e.duracion}<br/>
                        temporada: {e.temporada}<br/>
                    </div>)})
                  }</div>

        
      </div>
  )
}

export default Detail