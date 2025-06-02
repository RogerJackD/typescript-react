type Props = {
  nombre: string;
  docente: string;
  duracion: string;
  carrera: string;
};

export default function CursoCard({ nombre, docente, duracion, carrera }: Props) {
  return (
    <div className="p-4 border rounded shadow bg-white">
      <h2 className="text-lg font-bold">{nombre}</h2>
      <p>Docente: {docente}</p>
      <p>Duración: {duracion}</p>
      <p>Carrera: {carrera}</p>
    </div>
  );
}
