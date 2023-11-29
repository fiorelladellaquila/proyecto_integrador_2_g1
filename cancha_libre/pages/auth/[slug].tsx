
import { useRouter } from 'next/router';
import LoginComponent from '../../components/login/template/LoginComponent';
import SignUpComponent from '../../components/signup/template/SingUpComponent';
import RecoverPassword from '../../components/recoverPassword/template/recoverPasswordComponent'
export default function Auth() {
  const router = useRouter();
  const { slug } = router.query;
//  console.log(slug)
  // Utiliza el valor de slug para determinar qué componente de inicio de sesión renderizar
  if (slug === 'login') {
    return <LoginComponent />;
  
  }
  if (slug === 'SignUp') {
    return <SignUpComponent />;
  }
  if (slug === 'RecoverPassword') {
    return <RecoverPassword />;
  }
  // Maneja otros casos o valores de slug según sea necesario

  return <div>Página de autenticación no encontrada</div>;
}
