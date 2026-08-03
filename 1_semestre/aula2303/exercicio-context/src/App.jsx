import Cards from './components/cardnoticias.jsx';
import './App.css'
import img1 from './assets/arias.jpg';
import img2 from './assets/vorcaro.jpg';
import img3 from './assets/chupetinha.jpeg';
import { ContextoTema } from './contexts/temaContexto.jsx';

function App() {
  return (
    <>
    <div className="cards-container">
     <Cards 
      titulo="Palmeiras vence São Paulo em pleno Morumbis com gol de Jhon Arias!"
      img={img1}
      descricao="No dia 21/03/2026, no estádio do Morumbis, o visitante Palmeiras saiu vitorioso com o placar mínimo, 1x0. O autor do gol foi o colombiano recém-chegado, Jhon Arias! Palmeiras agora é líder isolado do Campeonato Brasileiro de 2026."
     />
     <Cards 
     titulo="Crise no Banco Master coloca Daniel Vorcaro no centro de investigação financeira"
     img={img2}
     descricao="O empresário e banqueiro Daniel Bueno Vorcaro, conhecido por comandar o Banco Master, sofreu com novas investigações sobre irregularidades no sistema financeiro. Autoridades analisam operações suspeitas e possíveis fraudes envolvendo a instituição."
     />
     <Cards 
     titulo="Deputado Nikolas Ferreira volta ao centro do debate político após discurso polêmico"
     img={img3}
     descricao="O deputado federal Nikolas Ferreira voltou a gerar grande repercussão nas redes sociais após um novo discurso no Congresso. Conhecido por seu estilo direto, o parlamentar participa de debates políticos que dividem opiniões entre apoiadores e críticos."
     />
     </div>
    </>
    
  );
};

export default App
  