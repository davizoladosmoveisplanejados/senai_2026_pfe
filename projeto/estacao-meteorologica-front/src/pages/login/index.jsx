import { useState } from "react";
import { Link } from "react-router-dom";
import imgEstacao from "../../assets/nuvens.jpg";
import './login.css'

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <>
      <section className="login-page">
        <div className="login-card">
          <h2 className="mb-4 text-center">Login</h2>

          <form>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Usuário"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />

            <input
              type="password"
              className="form-control mb-4"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <Link to="/" className="btn btn-primary w-100">
              Entrar
            </Link>
          </form>
        </div>
      </section>
    </>
  );
}
