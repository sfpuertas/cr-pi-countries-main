import './landing.css'
import { Link } from 'react-router-dom'

function Landing(){
    return(
    <div className='landing'>
          <Link to = {`/home`} className='link'>    Ingresar  </Link> 
    </div>
    )
}

export default Landing