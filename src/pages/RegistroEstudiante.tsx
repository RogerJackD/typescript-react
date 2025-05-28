import { useState } from "react";
import type { FormEvent } from "react";

export const RegistroEstudiante = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [comentarios, setComentarios] = useState('');
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <>
      {!enviado ? (
        <form onSubmit={manejarEnvio}>
          <label htmlFor="nombre">Nombre completo</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <label htmlFor="correo">Correo electrónico</label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />

          <label htmlFor="carrera">Carrera o especialidad</label>
          <input
            type="text"
            id="carrera"
            value={carrera}
            onChange={(e) => setCarrera(e.target.value)}
            required
          />

          <label htmlFor="comentarios">Comentarios</label>
          <textarea
            id="comentarios"
            value={comentarios}
            onChange={(e) => setComentarios(e.target.value)}
            required
          />

          <button type="submit">Registrar</button>
        </form>
      ) : (
        <div>
          <p>¡Gracias {nombre}!</p>
          <p>Hemos registrado tu correo: {correo}</p>
          <p>Carrera: {carrera}</p>
          <p>Comentarios: {comentarios}</p>
        </div>
      )}
    </>
  );
};
