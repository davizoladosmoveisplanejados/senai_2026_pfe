import {useContext} from "react";
import {ContextoTema} from "../contexts/temaContexto";

export default function Cards({titulo, img, descricao}){
    const {tema, mudarTema} = useContext(ContextoTema);

    return(
        <>
            <div className={`card-${tema}`}>
                <img src={img} alt="" />
                <h1>{titulo}</h1>
                <p>{descricao}</p>
            </div>
            <button onClick={mudarTema}>
                    Mudar Tema para {tema === 'light' ? 'escuro' : 'claro'}
            </button>
        </>
    )
}
