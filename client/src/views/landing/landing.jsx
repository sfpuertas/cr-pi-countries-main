import './landing.css'
import { Link } from 'react-router-dom'

function Landing(){
    return(
    <div className='landing'>
        <h1 style={{color:'white', fontSize:'80px', marginBottom:'200px', marginTop: '0px', paddingTop:'0'}}>Bienvenidos a la Countries App</h1>
          <Link to = {`/home`} className='link'>    Ingresar  </Link> 
    </div>
    )
}

export default Landing