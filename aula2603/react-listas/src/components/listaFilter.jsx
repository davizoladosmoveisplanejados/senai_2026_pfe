const estudantes = [
    {id: 1, nome: 'Davizola Degusta', rm: 2916, disciplina: "Matemática"},
    {id: 2, nome: 'Kelvin Destaque', rm: 3222, disciplina: "Matemática"},
    {id: 3, nome: 'Rafudo Moreno', rm: 6767, disciplina: "Inglês"}
];

export default function ListaFilter({titulo}) {
    const lista = estudantes.filter(estudante => estudante.disciplina == "Matemática");
    const listaEstudantes = lista.map((estudante) => {
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