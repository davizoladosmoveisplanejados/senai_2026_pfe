import './App.css'
import logoSesi from './assets/img/logosesi.jpg'; //importando imagens
import logoSenai from './assets/img/senailogo.png'
export default function App() {

  return (
    <>

    <div className="container">
      {/* logos */}
      <img src={logoSesi} alt="" className="logo" />
      <img src={logoSenai} alt="" className="logo" />
      {/* titulo */}
      <h1 className="titulo">Login</h1>
      <span className="subtitulo">para continuar</span>
      {/* formulario */}
      <label htmlFor="nome" className="label">Nome</label>
      <input type="text" className="campo" id='nome' placeholder='Seu nome' />
      <label htmlFor="senha" className="label">Senha</label>
      <input type="text" className="campo" id='senha' placeholder='*****' />
      {/* botao */}
      <button className="botao">Log in</button>
      {/* rodapé */}
      <span className="textoFooter">Esqueceu a senha?</span>
      <span className="textoFooter">Cadastre-se!</span>
    </div>
    </>
  ) 
}

// export default App
