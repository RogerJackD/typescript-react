import { useState } from "react";
import type { FormEvent } from "react";

export const AcercaDe = () => {
  const [name, setName] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-white"
          />

          <label htmlFor="correo">Correo</label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="border border-white"
          />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            className="border border-white"
          />

          <button type="submit">Enviar</button>
        </form>
      ) : (
        <span>
          Gracias {name}, te enviaremos un correo a: {correo} con tu mensaje: {mensaje}
        </span>
      )}
    </>
  );
};
