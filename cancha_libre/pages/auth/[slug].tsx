import { useRouter } from "next/router";
import LoginComponent from "../../components/login/template/LoginComponent";
import SignUpComponent from "../../components/signup/template/SingUpComponent";
import RecoverPassword from "../../components/recoverPassword/template/recoverPasswordComponent";
import RestorePassword from "@/components/restorePassword/template/RestorePasswordComponent";

export default function Auth() {
  const router = useRouter();
  const { slug, code, email } = router.query;

  if (slug === "login") {
    return <LoginComponent />;
  }
  if (slug === "SignUp") {
    return <SignUpComponent />;
  }
  if (slug === "RecoverPassword") {
    return <RecoverPassword />;
  }
  if (slug === "reset_password" && code && email) {
    return <RestorePassword code={code} email={email} />;
  }

  return <div>Página de autenticación no encontrada</div>;
}
