'use client';

import { useState } from "react";
import Header from "../components/header";

export default function BuscaCep() {
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState(null);
    const [erro, setErro] = useState(false);
    const [loading, setLoading] = useState(false);

    const search = async () => {
        if (cep && cep.length === 8) {
            setLoading(true);
            setErro(false);
            setEndereco(null);
            try {
                const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                const dados = await resposta.json();
                if (dados.erro) {
                    setErro(true);
                } else {
                    setEndereco(dados);
                }
            } catch (err) {
                console.error("Não foi possível acessar a API", err);
                setErro(true);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') search();
    };

    return (
        <>
            <Header />
            <main className="main-container">
                <div className="search-card">
                    <p className="search-card-title">
                        <span>📍</span> Consultar CEP
                    </p>
                    <p className="search-card-desc">
                        Digite os 8 dígitos do CEP para buscar o endereço completo
                    </p>
                    <div className="input-group">
                        <input
                            type="text"
                            className="cep-input"
                            value={cep}
                            onChange={(e) => setCep(e.target.value.replace(/\D/g, '').slice(0, 8))}
                            onKeyDown={handleKeyDown}
                            placeholder="00000000"
                            maxLength={8}
                        />
                        <button
                            className="search-btn"
                            onClick={search}
                            disabled={loading || cep.length !== 8}
                        >
                            {loading ? '⏳' : '🔍'} Buscar
                        </button>
                    </div>
                </div>

                {erro && (
                    <div className="error-card">
                        <span className="error-card-icon">⚠️</span>
                        <span className="error-card-text">CEP não encontrado. Verifique e tente novamente.</span>
                    </div>
                )}

                {endereco && (
                    <div className="result-card">
                        <div className="result-header">
                            <span className="result-header-icon">📋</span>
                            <h2>Endereço Encontrado</h2>
                        </div>
                        <div className="result-body">
                            <div className="result-row">
                                <div className="result-row-icon green">📮</div>
                                <div className="result-row-info">
                                    <span className="result-label">CEP</span>
                                    <span className="result-value">{endereco.cep}</span>
                                </div>
                            </div>
                            <div className="result-row">
                                <div className="result-row-icon yellow">🛤️</div>
                                <div className="result-row-info">
                                    <span className="result-label">Logradouro</span>
                                    <span className="result-value">{endereco.logradouro || '—'}</span>
                                </div>
                            </div>
                            <div className="result-row">
                                <div className="result-row-icon blue">🏘️</div>
                                <div className="result-row-info">
                                    <span className="result-label">Bairro</span>
                                    <span className="result-value">{endereco.bairro || '—'}</span>
                                </div>
                            </div>
                            <div className="result-row">
                                <div className="result-row-icon green">🏙️</div>
                                <div className="result-row-info">
                                    <span className="result-label">Cidade</span>
                                    <span className="result-value">{endereco.localidade}</span>
                                </div>
                            </div>
                            <div className="result-row">
                                <div className="result-row-icon yellow">🗺️</div>
                                <div className="result-row-info">
                                    <span className="result-label">Estado</span>
                                    <span className="result-value">{endereco.uf}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flag-stripe">
                            <div className="green-part"></div>
                            <div className="yellow-part"></div>
                            <div className="blue-part"></div>
                        </div>
                    </div>
                )}

                <div className="footer-badge">
                    <div className="footer-badge-dot"></div>
                    Powered by ViaCEP API
                </div>
            </main>
        </>
    );
}