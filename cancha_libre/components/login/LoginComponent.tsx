import { useState, FormEvent } from 'react';

export default function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica de autenticación, como enviar una solicitud al servidor o realizar comprobaciones locales.

    if (email && password) {
      // Aquí puedes realizar la lógica de autenticación, por ejemplo, enviar una solicitud al servidor.
      // Si la autenticación es exitosa, puedes redirigir al usuario a la página de inicio.
      console.log('Autenticación exitosa');
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}
