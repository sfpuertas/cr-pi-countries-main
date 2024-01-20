
import {useNavigate, useParams} from 'react-router-dom'
import './detail.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, volver } from '../../redux/actions';

function Detail() {
  
  const {id} = useParams();
  const detail = useSelector((state)=>state.detail);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  

  useEffect(()=>{
    dispatch(getDetail(id));
  },[dispatch])
  

  function handleVolver(e){
    e.preventDefault();
    dispatch(volver());
    navigate('/Home');
    
  }


  return (
    <div style={{paddingTop:'20px'}}>
      <div className='detail'>
        <div className='det'>
        <div style={{width:'450px', height:'400px', paddingLeft:'20px'}}>
          <img src={detail.flags} alt="bandera" width={'100%'} height={'100%'}/>
        </div>
        <div style={{width:'450px',height:'400px'}}>
        <div style={{fontSize:'30px'}}>Nombre: {detail.name}</div>
        <div style={{fontSize:'30px'}}>Continente: {detail.continents}</div>
        <div style={{fontSize:'30px'}}>Capital: {detail.capital}</div>
        <div style={{fontSize:'30px'}}>Area: {detail.area}</div>
        <div style={{fontSize:'30px'}}>Sub Region: {detail.subregion}</div>
        <div style={{fontSize:'30px'}}>Poblacion: {detail.population}</div>
      </div>
      </div>
        <div style={{fontSize:'50px', paddingLeft:'20px'}}>Actividades:
      
        <div className='act'>
          {
        detail.Activities?.map((e) => {
                    return (
                       <div className='actividades' key={e.name}>
                        <div style={{fontSize:'23px'}}>{e.name}:</div>
                        <div style={{paddingTop:'5px'}}>Dificultad: Nivel  {e.dificultad}<br/>
                        Duracion: {e.duracion} hs<br/>
                        Temporada: {e.temporada}<br/>
                        </div>
                    </div>)})
                  }</div>
        </div>
        
      </div>
      <div style={{paddingTop:'20px', textAlign:'left', marginLeft:'850px'}}><button style= {{width:'150px', heigth: "200px", fontSize:'20px'}} onClick={handleVolver}>Volver</button></div>
      </div>
  )
}

export default Detail