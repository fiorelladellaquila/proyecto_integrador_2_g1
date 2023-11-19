
import { useRouter } from 'next/router';
import LoginComponent from '../../components/login/template/LoginComponent';

export default function Auth() {
  const router = useRouter();
  const { slug } = router.query;

  // Utiliza el valor de slug para determinar qué componente de inicio de sesión renderizar
  if (slug === 'login') {
    return <LoginComponent />;
  }
  if( slug === 'createdUser') {
    return <LoginComponent />
  }
  if( slug === 'reset') {
    return <LoginComponent />
  }

  // Maneja otros casos o valores de slug según sea necesario

  return <div>Página de autenticación no encontrada</div>;
}
