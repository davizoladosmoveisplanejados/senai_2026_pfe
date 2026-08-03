import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";

import Foto1 from "../img/lendas.jpg";
import Foto2 from "../img/foto2.jpg";
import Foto3 from "../img/foto3.jpg";
import Foto4 from "../img/foto4.jpg";
import Foto5 from "../img/foto5.jpg";
import Foto6 from "../img/foto6.jpg";

export default function Fotos() {

    const fotos = [
        Foto1,
        Foto2,
        Foto3,
        Foto4,
        Foto5,
        Foto6
    ];

    return (
        <>
            <Header />

            <main className="fotos-page">

                <h2>Galeria do Terceirão A</h2>

                <p className="texto-galeria">
                    Reviva alguns dos melhores momentos da nossa turma. Cada foto representa
                    uma lembrança especial que ficará marcada para sempre.
                </p>

                <section className="galeria">

                    {fotos.map((foto, index) => (
                        <div className="foto-card" key={index}>
                            <Image
                                src={foto}
                                alt={`Foto ${index + 1}`}
                                className="foto"
                            />
                        </div>
                    ))}

                </section>

            </main>

            <Footer />
        </>
    );
}