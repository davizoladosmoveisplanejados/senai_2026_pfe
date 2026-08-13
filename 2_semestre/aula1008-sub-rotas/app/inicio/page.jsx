"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import styles from "./inicio.module.css";

export default function Inicio() {
  const noticiaHero = {
    id: 1,
    titulo: "Equipe de Robótica do SESI garante vaga no Torneio Nacional da FLL",
    categoria: "Tecnologia & Inovação",
    resumo: "Com um projeto focado em sustentabilidade e automação inteligente, a equipe conquistou o primeiro lugar na etapa regional e avança rumo à fase nacional.",
    data: "13 de Agosto, 2026",
    tempoLeitura: "4 min de leitura",
    autor: "Redação SESI News",
    link: "/categorias"
  };

  const ultimasNoticias = [
    {
      id: 2,
      titulo: "Interclasses de Esportes começam na próxima semana com torneio de Futsal e Vôlei",
      categoria: "Esportes",
      resumo: "Confira as tabelas de jogos, os horários das partidas e as regras para as torcidas organizadas.",
      data: "12 de Agosto, 2026",
      tempoLeitura: "3 min",
      link: "/categorias/esportes"
    },
    {
      id: 3,
      titulo: "Feira de Profissões e Carreiras reúne empresas parceiras do SENAI",
      categoria: "Carreiras",
      resumo: "Alunos poderão cadastrar currículos e participar de oficinas de orientação profissional gratuitas.",
      data: "11 de Agosto, 2026",
      tempoLeitura: "5 min",
      link: "/categorias"
    },
    {
      id: 4,
      titulo: "Projeto de Leitura e Literatura lança concurso de contos escolares",
      categoria: "Cultura",
      resumo: "Estudantes de todas as séries podem enviar suas produções até o final do mês. Premiação inclui leitores digitais.",
      data: "10 de Agosto, 2026",
      tempoLeitura: "2 min",
      link: "/categorias"
    }
  ];

  const maisLidas = [
    { id: 1, titulo: "Calendário do Vestibulinho e Cursos Técnicos 2027", acessos: "2.4k leituras", link: "/categorias" },
    { id: 2, titulo: "Dicas de estudo para arrasar nas provas de exatas", acessos: "1.8k leituras", link: "/categorias" },
    { id: 3, titulo: "Resultados do Torneio Interescolar de Xadrez", acessos: "1.2k leituras", link: "/categorias/esportes" },
  ];

  const proximosEventos = [
    { dia: "18", mes: "AGO", titulo: "Abertura dos Jogos Interclasses", horario: "08:00 - Ginásio" },
    { dia: "25", mes: "AGO", titulo: "Workshop de Programação Web", horario: "14:00 - Lab 3" },
    { dia: "02", mes: "SET", titulo: "Feira de Ciência e Robótica", horario: "09:00 - Pátio" },
  ];

  return (
    <>
      <Header />
      <main className={styles.container}>
        
        {/* Banner Hero - Notícia em Destaque */}
        <section className={styles.hero}>
          <span className={styles.heroTag}>Destaque Principal</span>
          <h2 className={styles.heroTitle}>{noticiaHero.titulo}</h2>
          <p className={styles.heroDescription}>{noticiaHero.resumo}</p>
          <div className={styles.heroMeta}>
            <span>Por {noticiaHero.autor}</span>
            <span>•</span>
            <span>{noticiaHero.data}</span>
            <span>•</span>
            <span>{noticiaHero.tempoLeitura}</span>
          </div>
          <Link href={noticiaHero.link} className={styles.heroButton}>
            Ler matéria completa →
          </Link>
        </section>

        {/* Categorias Rápidas */}
        <nav className={styles.categoryBar}>
          <span className={styles.categoryTitle}>Categorias:</span>
          <Link href="/categorias" className={styles.categoryChip}>Todas</Link>
          <Link href="/categorias/esportes" className={styles.categoryChip}>⚽ Esportes</Link>
          <Link href="/categorias" className={styles.categoryChip}>🤖 Tecnologia</Link>
          <Link href="/categorias" className={styles.categoryChip}>💼 Carreiras</Link>
          <Link href="/categorias" className={styles.categoryChip}>🎭 Cultura</Link>
        </nav>

        {/* Layout Principal com Grade + Sidebar */}
        <div className={styles.mainLayout}>
          
          {/* Coluna da Esquerda: Últimas Notícias */}
          <section className={styles.newsSection}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Últimas Notícias</h3>
            </div>

            <div className={styles.newsGrid}>
              {ultimasNoticias.map((noticia) => (
                <article key={noticia.id} className={styles.newsCard}>
                  <div className={styles.cardBody}>
                    <span className={styles.cardCategory}>{noticia.categoria}</span>
                    <h4 className={styles.cardTitle}>{noticia.titulo}</h4>
                    <p className={styles.cardSummary}>{noticia.resumo}</p>
                    <div className={styles.cardFooter}>
                      <span>{noticia.data}</span>
                      <Link href={noticia.link} className={styles.cardLink}>
                        Ler mais →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Coluna da Direita: Lateral (Sidebar) */}
          <aside className={styles.sidebar}>
            
            {/* Widget 1: Mais Lidas */}
            <div className={styles.widget}>
              <h4 className={styles.widgetTitle}>🔥 Mais Lidas</h4>
              <ul className={styles.popularList}>
                {maisLidas.map((item, index) => (
                  <li key={item.id} className={styles.popularItem}>
                    <span className={styles.popularNumber}>#{index + 1}</span>
                    <div className={styles.popularContent}>
                      <Link href={item.link} className={styles.popularTitle}>
                        {item.titulo}
                      </Link>
                      <span className={styles.popularMeta}>{item.acessos}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget 2: Próximos Eventos */}
            <div className={styles.widget}>
              <h4 className={styles.widgetTitle}>📅 Próximos Eventos</h4>
              <div className={styles.eventList}>
                {proximosEventos.map((evento, idx) => (
                  <div key={idx} className={styles.eventItem}>
                    <div className={styles.eventDate}>
                      <span className={styles.eventDay}>{evento.dia}</span>
                      <span className={styles.eventMonth}>{evento.mes}</span>
                    </div>
                    <div className={styles.eventDetails}>
                      <span className={styles.eventTitle}>{evento.titulo}</span>
                      <span className={styles.eventInfo}>{evento.horario}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 3: Newsletter */}
            <div className={styles.newsletterBox}>
              <h4 className={styles.newsletterTitle}>📩 SESI News no seu E-mail</h4>
              <p className={styles.newsletterText}>
                Receba os destaques da semana e avisos importantes diretamente na sua caixa de entrada.
              </p>
              <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Seu e-mail do SESI/SENAI" 
                  className={styles.newsletterInput}
                />
                <button type="submit" className={styles.newsletterButton}>
                  Inscrever-se
                </button>
              </form>
            </div>

          </aside>

        </div>

      </main>
      <Footer />
    </>
  );
}

