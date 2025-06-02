import Titulo from '../../components/Titulo'
import { Link } from 'react-router-dom'
export const MostrarTarea1 = () => {
  return (

    <>
        <div>
          <Titulo texto="enviando texto desde app" />
        </div>



          <nav>
            <Link to="/inicio">Inicio</Link> | <Link to="/contacto">Contacto</Link> | <Link to="/acercade">Acerca de</Link>
          </nav>

          
            

          
    </>

  )
}
