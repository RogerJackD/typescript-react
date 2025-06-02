import { useState } from 'react';

type FormData = {
  fullName: string;
  email: string;
  career: string;
  comments: string;
};

export const MostrarTarea2 = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    career: '',
    comments: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <h2>¡Gracias {formData.fullName}!</h2>
        <p>Hemos registrado tu correo: <strong>{formData.email}</strong></p>
        <p>Carrera: <strong>{formData.career}</strong></p>
        <p>Comentarios: <strong>{formData.comments}</strong></p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre completo:</label><br />
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className='border border-white'
        />
      </div>

      <div>
        <label>Correo electrónico:</label><br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className='border border-white'
        />
      </div>

      <div>
        <label>Carrera o especialidad:</label><br />
        <input
          type="text"
          name="career"
          value={formData.career}
          onChange={handleChange}
          required
          className='border border-white'
        />
      </div>

      <div>
        <label>Comentarios:</label><br />
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          required
          className='border border-white'
        />
      </div>

      <button type="submit">Registrar</button>
    </form>
  );
}
