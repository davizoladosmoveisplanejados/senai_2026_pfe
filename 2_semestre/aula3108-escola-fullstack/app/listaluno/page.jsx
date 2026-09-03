'use client';
import { useState } from "react";
import Header from "../components/header";
import Link from "next/link";
import styles from "./listaluno.module.css";

export default function ListAluno() {

    return (
        <>
            <Header />

            {/* ===== BANNER HERO ===== */}
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <div className={styles.heroText}>
                        <span className={styles.heroTag}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            Gestão Acadêmica
                        </span>
                        <h2 className={styles.heroTitle}>
                            Lista de <span className="accent">Alunos</span>
                        </h2>
                        <p className={styles.heroDesc}>
                            Consulte a relação completa de alunos cadastrados no sistema SESI Escola,
                            com acesso rápido ao RA, série e dados individuais.
                        </p>
                    </div>

                    <Link href="/cadaluno" className={styles.btnHero}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                        Cadastrar Novo Aluno
                    </Link>
                </div>
            </section>

            {/* ===== CONTEÚDO DA TABELA ===== */}
            <main className={styles.mainSection}>
                <div className={styles.container}>
                    <div className={styles.tableCard}>

                        {/* CABEÇALHO DO CARD */}
                        <div className={styles.cardHeader}>
                            <div className={styles.headerLeft}>
                                <div className={styles.cardIconBadge}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                        <polyline points="14 2 14 8 20 8" />
                                        <line x1="16" y1="13" x2="8" y2="13" />
                                        <line x1="16" y1="17" x2="8" y2="17" />
                                        <polyline points="10 9 9 9 8 9" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className={styles.cardTitle}>Estudantes Matriculados</h3>
                                    <p className={styles.cardSubtitle}>Registros oficiais do sistema escolar</p>
                                </div>
                            </div>

                            <span className={styles.badgeTotal}>
                                <span className={styles.badgeTotalDot}></span>
                                Sistema Ativo
                            </span>
                        </div>

                        {/* TABELA RESPONSIVA */}
                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>Idade</th>
                                        <th>Série</th>
                                        <th>RA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span className={styles.idBadge}>67</span>
                                        </td>
                                        <td>
                                            <div className={styles.studentCell}>
                                                <div className={styles.avatarMini}>BP</div>
                                                <span className={styles.studentName}>Bianca Pasini</span>
                                            </div>
                                        </td>
                                        <td>17 anos</td>
                                        <td>
                                            <span className={styles.serieBadge}>3A</span>
                                        </td>
                                        <td>
                                            <span className={styles.raBadge}>676767</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* RODAPÉ DA TABELA */}
                        <div className={styles.tableFooter}>
                            <span className={styles.statusIndicator}>
                                Exibindo estudantes cadastrados
                            </span>
                            <span>SESI Escola 2026</span>
                        </div>

                    </div>
                </div>
            </main>

            {/* ===== FOOTER PADRÃO ===== */}
            <footer className="footer">
                <div className="footer-inner">
                    <div className="footer-brand">
                        <span className="accent">SESI</span> Escola
                    </div>
                    <ul className="footer-links">
                        <li><Link href="/">Início</Link></li>
                        <li><Link href="/cadaluno">Cadastro</Link></li>
                        <li><Link href="/listaluno">Alunos</Link></li>
                        <li><Link href="/notaluno">Notas</Link></li>
                    </ul>
                    <div className="footer-divider"></div>
                    <p className="footer-copy">
                        © 2026 SESI Escola — Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </>
    );
};
