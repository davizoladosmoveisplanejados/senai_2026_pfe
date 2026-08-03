

export default function MeuAvatar(props){
    return(
        <>
            <img src={props.img} alt="" />
            <h1>Olá, <span>{props.nome}</span></h1>
            <h2>Sua idade é: <span>{props.idade}</span></h2>
            <h3>Estilo Musical Favorito: <span>{props.musica}</span></h3>
            <h3>Disciplina Favorita: <span>{props.disciplina}</span></h3>
        </>
    );
}