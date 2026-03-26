import imgmaca from '../assets/maca.jpg'
import imgbanana from '../assets/banana.jpg'
import imgpera from '../assets/pera.jpg'
import imgabacaxi from '../assets/abaxaki.jpg'
import imgmanga from '../assets/manga.jpg'

const frutas = [
    {id:1, nome: "Maçã", img: imgmaca},
    {id:2, nome: "Banana", img: imgbanana},
    {id:3, nome: "Pêra", img: imgpera},
    {id:4, nome: "Abacaxi", img: imgabacaxi},
    {id:5, nome: "Manga", img: imgmanga},
];

export default function ListaFrutas ({titulo}) {
    const listaFrutas = frutas.map((fruta) => {
        return <li key = {fruta.id}>
            <h3>{fruta.nome}</h3>
            <img src={fruta.img} alt={fruta.nome} width='100px' height='100px'/>
        </li>
    });
    return(
        <>
            <h1>{titulo}</h1>
            <ul>
                {listaFrutas}
            </ul>
        </>
    )
}