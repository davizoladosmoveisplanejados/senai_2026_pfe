import Header from "../components/header";
import Footer from "../components/footer";

export default function Sobre() {
    return (
        <>
            <Header />

            <main className="sobre">

                <section className="sobre-container">

                    <h2>Sobre o Terceirão A</h2>

                    <p>
                        O Terceirão A representa muito mais do que uma sala de aula.
                        Ao longo dos anos, construímos amizades, superamos desafios,
                        compartilhamos momentos inesquecíveis e criamos lembranças que
                        permanecerão para sempre. Entre provas, trabalhos, risadas,
                        trotes, passeios e conquistas, aprendemos não apenas conteúdos,
                        mas também valores como união, respeito e companheirismo.
                    </p>

                    <p>
                        Este site foi criado para registrar essa trajetória, reunindo
                        fotos, informações e recordações de um dos períodos mais
                        marcantes de nossas vidas. Aqui celebramos cada conquista e
                        preservamos a história da nossa turma, para que possamos olhar
                        para trás no futuro e lembrar com carinho de tudo o que vivemos
                        juntos durante o último ano do ensino médio.
                    </p>

                </section>

            </main>

            <Footer />
        </>
    );
}