import './App.css';


import { Routes, Route, useNavigate } from 'react-router-dom';
import { MostrarTarea1 } from './pages/tarea1/MostrarTarea1';
import {MostrarTarea2} from './pages/tarea2/MostrarTarea2';
import { AcercaDe, Contacto, Inicio } from './pages';
import { MostrarTarea3 } from './pages/tarea3/MostrarTarea3';

function App() {

  const navigate = useNavigate();
  
  const irTarea1 = () =>{
    navigate("/tarea1")
  }


  const irTarea2 = () =>{
    navigate("/tarea2")
  }

  const irTarea3 = () =>{
    navigate("/cursos")
  }

  return (
    <>
      
      <Routes>
        <Route path="/tarea1" element={<MostrarTarea1/>} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/acercade" element={<AcercaDe/>} />

        <Route path="/tarea2" element={<MostrarTarea2/>} />


        <Route path="/cursos/*" element={<MostrarTarea3/>} />


        

      </Routes> 

      <div className='flex gap-4'>
        <button onClick={irTarea1}>VER TAREA 1</button>
        <button onClick={irTarea2}>VER TAREA 2</button>
        <button onClick={irTarea3}>VER TAREA 3</button>

      </div>




        

        
    </>
  )
}

export default App
