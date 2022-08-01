import { GoogleLogo } from "phosphor-react";
import "./styles.scss";

export function SignIn() {
  return (
    <div className="container">
      <h1>Acesse sua conta</h1>

      <span>
        Utilizando autenticação social, por exemplo, a autenticação com a
        Google, você <br />
        facilita a vida do usuário permitindo utilizar sua aplicação sem fazer
        cadastro.
      </span>

      <button type="button" className="button">
        <GoogleLogo />
        Entrar com Google
      </button>
    </div>
  );
}
