import { useState } from "react";
import { Link } from "react-router-dom";
import "../login/login.css";

export default function Registro() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  return (
    <>
      <section className="login-page">
        <div className="login-card">
          <h2 className="mb-4 text-center">Cadastro de Usuário</h2>

          <form>
            <input
              type="text"
              className="form-control mb-4"
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

            <input
              type="password"
              className="form-control mb-4"
              placeholder="Confirmar Senha"
              value={confirmaSenha}
              onChange={(e) => setConfirmaSenha(e.target.value)}
            />

            <Link to="/dashboard" className="btn btn-primary w-100">
              Cadastrar
            </Link>
          </form>
        </div>
      </section>
    </>
  );
}
