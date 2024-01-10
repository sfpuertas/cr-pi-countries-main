import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries, getCountriesName } from '../../redux/actions'
import './home.css'
import Navbar from '../../components/navbar/navbar'
import Cards from '../../components/cards/cards'

function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state)=>state.allCountries);
  const [filtrados, setFiltrados] = useState(allCountries);
  const [searchString, setSearchString] = useState('');
  
  
  function handleChange(e){
    e.preventDefault()
    setSearchString(e.target.value);
  }
  
  
  //filtro con la base de datos

    function handleSubmit(e){
    e.preventDefault();
    dispatch(getCountriesName(searchString));
  }


  //filtro con el estado

  // function handleSubmit(){
  //   e.preventDefault()
  //   const filtered = allCountries.filter((user) => user.name.includes(searchString));
  //   setFiltrados(filtered);
  // }

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
       <div className='cards'> <Cards allCountries = {allCountries}/></div>
      </div>
    </>
  )
}

export default Home