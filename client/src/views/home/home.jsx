import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries, getCountriesName,getPaginado } from '../../redux/actions'
import './home.css'
import Navbar from '../../components/navbar/navbar'
import Cards from '../../components/cards/cards'
import Paginado from '../../components/paginado/paginado'

function Home() {
  const dispatch = useDispatch();
 
  const allCountries = useSelector((state)=>state.allCountries);
  const volver = useSelector((state)=>state.volver);
  const [searchString, setSearchString] = useState('');
  const pagina = useSelector((state)=>state.pagina);
  const total = [...allCountries].length;
 
  function handleChange(e){
    e.preventDefault()
    setSearchString(e.target.value);
  }

    function handleSubmit(e){
    e.preventDefault();
    dispatch(getCountriesName(searchString));
  }

  function pagHandler (e){
    e.preventDefault()
    dispatch(getPaginado(e.target.value))
  }


  
  useEffect(()=>{
    dispatch(getCountries());
  },[dispatch])
  return (
    <>
      <div className='home'>
        <div className='cabecera'>
          <h2 className='home-title'>Home</h2>
          <Navbar handleChange = {handleChange} handleSubmit= {handleSubmit}/>
        </div>
       <div className='cards'> <Cards pagina={pagina} allCountries = {allCountries}/></div>
       <Paginado pagHandler={pagHandler} pagina={pagina} total={total}/>
      </div>
    </>
  )
}

export default Home