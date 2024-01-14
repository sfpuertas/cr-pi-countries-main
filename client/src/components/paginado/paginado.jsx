import './paginado.css'

function Paginado ({pagHandler, pagina, total}){
   
return (
<div className="contenedor">
          <button value={'prev'} onClick={pagHandler}>Prev</button>
          <span className="span">page: {pagina +1} de.. {Math.ceil(total / 10)} </span>
          <button value={'next'} onClick={pagHandler}>Next</button>
       </div>   
)
}

export default Paginado;