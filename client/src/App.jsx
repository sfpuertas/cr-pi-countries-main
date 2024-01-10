
import {Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './views/home/home'
import Form from './views/form/form'
import Detail from './views/detail/detail'
import  Landing  from './views/landing/landing'

function App() {
  return (
      <div className='app'>
        <Routes>
        <Route exact path='/' Component={ Landing }/>
        <Route exact path='/home' Component={ Home }/>
        <Route path='/home/:id' Component={ Detail }/>
        <Route path='/form' Component={ Form }/> 
        </Routes>
      </div>
  )
}

export default App
