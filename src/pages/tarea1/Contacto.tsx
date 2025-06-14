import { useState } from "react";
import type { FormEvent } from "react";
export const Contacto = () => {
    const [nombre, setNombre] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [enviado, setEnviado] = useState(false);

    const manejarEnvio = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`Mensaje enviado por ${nombre}: ${mensaje}`);
        setEnviado(true);
        setNombre('');
        setMensaje('');
    };


    return (
    <>
            <div>
                <h2>Formulario de Contacto</h2>
                {enviado && <p style={{ color: 'green' }}>¡Mensaje enviado!</p>}
                <form onSubmit={manejarEnvio}>
                    <div>
                        <label>Nombre:</label><br />
                        <input
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                            className="border border-white"
                        />
                    </div>
                    <div>
                        <label>Mensaje:</label><br />
                        <textarea
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                            required
                            className="border border-white"
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
</>
        );
};
