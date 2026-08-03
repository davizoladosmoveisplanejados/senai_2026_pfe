const estudantes = [
    {id: 1, nome: 'Davizola Degusta', rm: 2916, idade: 17},
    {id: 2, nome: 'Kelvin Destaque', rm: 3222, idade: 17},
    {id: 3, nome: 'Rafudo Moreno', rm: 6767, idade: 17}
];

export default function ListaMap({titulo}) {
    const listaEstudantes = estudantes.map((estudante) => {
        return <li key={estudante.id}>
            <h3>Nome: {estudante.nome}</h3>
            <p>RM: {estudante.rm}</p>
            <p>Idade: {estudante.idade}</p>
        </li>
    });
    return(
        <>
            <h1>{titulo}</h1>
            <ul>{listaEstudantes}</ul>
        </>
    )
}