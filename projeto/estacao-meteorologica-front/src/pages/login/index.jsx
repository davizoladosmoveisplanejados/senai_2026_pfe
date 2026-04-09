import { useState } from "react";
import { Link } from "react-router-dom";
import imgEstacao from "../../assets/nuvens.jpg";
import "./login.css";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

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

            <div className="position-relative mb-3">
              <input
                type={mostrarSenha ? "text" : "password"}
                className="form-control"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />

              <span
                onMouseDown={() => setMostrarSenha(true)}
                onMouseUp={() => setMostrarSenha(false)}
                onMouseLeave={() => setMostrarSenha(false)}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                👁️
              </span>
            </div>

            <Link to="/dashboard" className="btn btn-primary w-100">
              Entrar
            </Link>
            <Link
              to="/registro"
              className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Não tem conta? Cadastre-se
            </Link>
          </form>
        </div>
      </section>
    </>
  );
}
