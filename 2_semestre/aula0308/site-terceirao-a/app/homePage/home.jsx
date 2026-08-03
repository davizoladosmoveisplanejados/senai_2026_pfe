import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Lendas from "../img/lendas.jpg";

export default function HomePage() {
    return (
        <>
            <Header />

            <main className="home">

                <section className="banner">
                    <Image
                        src={Lendas}
                        alt="Turma Lendas"
                        className="banner-img"
                        priority
                    />
                </section>

                <section className="informacoes">
                    <h3>Informações</h3>

                    <div className="card-info">
                        <h6>Formatura 18/12/2026</h6>
                        <p>Todos estarão reunidos para viver esse momento especial em nossas vidas.</p>
                    </div>

                    <div className="card-info">
                        <h6>Próximo Trote 11/08/2026</h6>
                        <p>Tema do trote: Personagens.</p>
                    </div>

                </section>

            </main>

            <Footer />
        </>
    );
}