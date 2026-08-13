"use client";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";
import styles from "./esportes.module.css";

export default function Esportes() {
  const noticiaDestaque = {
    id: 1,
    modalidade: "Interclasses 2026",
    titulo: "Interclasses de Esportes do SESI começam nesta segunda com público recorde",
    resumo: "Mais de 300 alunos participam dos torneios de Futsal, Vôlei, Basquete e Xadrez. Confira a programação da semana de abertura.",
    data: "12 de Agosto, 2026",
    local: "Ginásio Poliesportivo SESI"
  };

  const noticiasEsportivas = [
    {
      id: 2,
      modalidade: "Futsal Masculino",
      titulo: "Turma do 3º Ano A vence virada histórica nas quartas de final",
      resumo: "Com dois gols nos últimos minutos, a equipe garantiu vaga na semifinal do campeonato escolar.",
      data: "12 de Agosto, 2026"
    },
    {
      id: 3,
      modalidade: "Vôlei Feminino",
      titulo: "Equipe de Vôlei do SESI se classifica para a fase estadual",
      resumo: "As atletas da escola venceram a etapa regional invictas e avançam na competição.",
      data: "11 de Agosto, 2026"
    },
    {
      id: 4,
      modalidade: "Xadrez",
      titulo: "Torneio Interno de Xadrez revela novos talentos no ensino fundamental",
      resumo: "Confira quem foram os grandes campeões da categoria mirim e infantil deste ano.",
      data: "10 de Agosto, 2026"
    }
  ];

  const resultadosRecentes = [
    { modalidade: "Futsal", time1: "3º Ano A", placar1: 4, time2: "2º Ano B", placar2: 3, status: "Finalizado" },
    { modalidade: "Vôlei", time1: "1º Ano C", placar1: 2, time2: "3º Ano B", placar2: 0, status: "Finalizado" },
    { modalidade: "Basquete", time1: "2º Ano A", placar1: 28, time2: "3º Ano C", placar2: 24, status: "Finalizado" }
  ];

  return (
    <>
      <Header />
      <main className={styles.container}>
        
        {/* Botão Voltar */}
        <Link href="/categorias" className={styles.backLink}>
          ← Voltar para Categorias
        </Link>

        {/* Hero Section Esportes */}
        <section className={styles.heroSports}>
          <span className={styles.heroTag}>⚽ SESI Esportes</span>
          <h1 className={styles.heroTitle}>{noticiaDestaque.titulo}</h1>
          <p className={styles.heroDescription}>{noticiaDestaque.resumo}</p>
          <small style={{ opacity: 0.9 }}>📍 {noticiaDestaque.local} • {noticiaDestaque.data}</small>
        </section>

        {/* Barra de Filtros por Modalidade */}
        <nav className={styles.filtersBar}>
          <button className={`${styles.filterChip} ${styles.filterChipActive}`}>Todos os Esportes</button>
          <button className={styles.filterChip}>⚽ Futsal</button>
          <button className={styles.filterChip}>🏐 Vôlei</button>
          <button className={styles.filterChip}>🏀 Basquete</button>
          <button className={styles.filterChip}>♟️ Xadrez</button>
          <button className={styles.filterChip}>🏊 Natação</button>
        </nav>

        {/* Layout Principal: Notícias + Placar de Resultados */}
        <div className={styles.contentGrid}>
          
          {/* Coluna Esquerda: Notícias */}
          <section className={styles.newsList}>
            <h2 className={styles.sectionTitle}>Últimas do Esporte</h2>
            
            {noticiasEsportivas.map((noticia) => (
              <article key={noticia.id} className={styles.sportsCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.modalityBadge}>{noticia.modalidade}</span>
                  <span className={styles.cardDate}>{noticia.data}</span>
                </div>
                <h3 className={styles.cardTitle}>{noticia.titulo}</h3>
                <p className={styles.cardSummary}>{noticia.resumo}</p>
              </article>
            ))}
          </section>

          {/* Coluna Direita: Placar de Resultados */}
          <aside className={styles.scoreboardWidget}>
            <h3 className={styles.scoreboardTitle}>🏆 Resultados Recentes</h3>
            
            {resultadosRecentes.map((jogo, index) => (
              <div key={index} className={styles.matchCard}>
                <div className={styles.matchHeader}>
                  <span>{jogo.modalidade}</span>
                  <span>{jogo.status}</span>
                </div>
                <div className={styles.matchScore}>
                  <span>{jogo.time1}</span>
                  <span className={styles.scoreNumber}>{jogo.placar1} x {jogo.placar2}</span>
                  <span>{jogo.time2}</span>
                </div>
              </div>
            ))}
          </aside>

        </div>

      </main>
      <Footer />
    </>
  );
}