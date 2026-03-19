import { useState, useEffect } from "react";

export default function Feriados() {
  const [ano, setAno] = useState(0);
  const [nomeBusca, setNomeBusca] = useState("");
  const [feriado, setFeriado] = useState("");

  useEffect(() => {
    if (ano.length === 4) {
      fetch(`https://brasilapi.com.br/api/feriados/v1/${ano}`)
        .then((response) => response.json())
        .then((data) => {
          if (!data.erro) {
            const resultado = data.find((f) =>
              f.name.toLowerCase().includes(nomeBusca.toLowerCase()),
            );

            if (resultado) {
              setFeriado(resultado);
            } else {
              setFeriado(null);
              alert("Feriado não encontrado");
            }
          }
        })
        .catch((error) => console.error("Erro ao acessar", error));
    }
  }, [ano, nomeBusca]);

  return (
    <>
      <h1>Busca Feriado: </h1>
      <input
        type="number"
        placeholder="Digite o ano..."
        maxLength="4"
        value={ano}
        onChange={(e) => setAno(e.target.value)}
      />
      <input
        type="text"
        placeholder="Digite o nome do feriado..."
        value={nomeBusca}
        onChange={(e) => setNomeBusca(e.target.value)}
      />
      {feriado && (
        <div>
          <p>Data: {feriado.date}</p>
          <p>Nome: {feriado.name}</p>
          <p>Tipo: {feriado.type === "national" ? "Nacional" : feriado.type}</p>
        </div>
      )}
    </>
  );
}
