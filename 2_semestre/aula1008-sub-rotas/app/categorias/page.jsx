import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import styles from "./categorias.module.css";

export default function Categorias() {
  const categorias = [
    {
      id: "esportes",
      titulo: "Esportes",
      icone: "⚽",
      descricao: "Acompanhe todas as novidades dos campeonatos interclasses, torneios escolares, futsal, vôlei, natação e atletismo do SESI.",
      topicos: ["Futsal", "Vôlei", "Interclasses", "Xadrez", "Atletismo"],
      link: "/categorias/esportes",
      disponivel: true
    }
  ];

  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={styles.headerSection}>
          <h1 className={styles.pageTitle}>Categorias de Notícias</h1>
          <p className={styles.pageSubtitle}>
            Explore os assuntos e coberturas exclusivas do portal SESI News.
          </p>
        </section>

        <section className={styles.categoriesGrid}>
          {categorias.map((cat) => (
            <article key={cat.id} className={styles.categoryCard}>
              <div>
                <div className={styles.cardHeader}>
                  <span className={styles.categoryIcon}>{cat.icone}</span>
                  <h2 className={styles.categoryTitle}>{cat.titulo}</h2>
                </div>

                <p className={styles.categoryDescription} style={{ marginTop: "16px" }}>
                  {cat.descricao}
                </p>

                <div className={styles.subTopics} style={{ marginTop: "16px" }}>
                  {cat.topicos.map((topico, index) => (
                    <span key={index} className={styles.topicTag}>
                      #{topico}
                    </span>
                  ))}
                </div>
              </div>

              <Link href={cat.link} className={styles.accessButton}>
                Ver Notícias de {cat.titulo} →
              </Link>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}