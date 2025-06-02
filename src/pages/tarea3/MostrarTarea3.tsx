import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CursoCard from './components/CursoCard';

type Curso = {
  nombre: string;
  docente: string;
  duracion: string;
  carrera: string;
};

export const MostrarTarea3 = () => {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const navigate = useNavigate();

  const agregarCurso = (curso: Curso) => {
    setCursos([...cursos, curso]);
    navigate('/cursos');
  };

  return (
    <div className="p-4">
      <nav className="flex gap-4 mb-6 text-blue-600 font-semibold">
        <Link to="">Cursos</Link>
        <Link to="nuevo">Nuevo Curso</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ListaCursos cursos={cursos} />} />
        <Route path="nuevo" element={<FormularioCurso onSubmit={agregarCurso} />} />
      </Routes>
    </div>
  );
};

function ListaCursos({ cursos }: { cursos: Curso[] }) {
  return (
    <div className="grid gap-4 text-black">
      {cursos.length === 0 && <p className='text-white'>No hay cursos.</p>}
      {cursos.map((c, i) => <CursoCard key={i} {...c} />)}
    </div>
  );
}

function FormularioCurso({ onSubmit }: { onSubmit: (c: Curso) => void }) {
  const [form, setForm] = useState({
    nombre: '', docente: '', duracion: '', carrera: ''
  });

  const carreras = ['Computación', 'Diseño', 'Administración'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(form).some(v => v.trim() === '')) {
      alert('Todos los campos son requeridos');
      return;
    }
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      <input name="nombre" placeholder="Nombre del curso" className="w-full p-2 rounded border border-white" onChange={handleChange} required />
      <input name="docente" placeholder="Docente" className="w-full p-2 border rounded border-white" onChange={handleChange} required />
      <input name="duracion" placeholder="Duración" className="w-full p-2 border rounded border-white" onChange={handleChange} required />
      <select name="carrera" className="w-full p-2 border rounded border-white" onChange={handleChange} required>
        <option value="" className='text-black'>Selecciona una carrera</option>
        {carreras.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Guardar</button>
    </form>
  );
}
