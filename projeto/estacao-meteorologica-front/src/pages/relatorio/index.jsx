import GraficoBarra from "../../components/graficoBarra";
import Header from "../../components/header";

export default function Relatorio(){

    const leituras = [
        {horario: "12:00", qualidadeAr: "Boa", iqa: 42, temperatura: '26°C', umidade: '67%'},
        {horario: "13:00", qualidadeAr: "Boa", iqa: 45, temperatura: '27°C', umidade: '69%'},
        {horario: "14:00", qualidadeAr: "Boa", iqa: 47, temperatura: '28°C', umidade: '64%'},
        {horario: "15:00", qualidadeAr: "Média", iqa: 39, temperatura: '29°C', umidade: '63%'}
    ];

    return(
        <>
        <Header />
        <div className="container">
            <h3>Relatório Estação Meteorológica</h3>
            <p>Monitoramento da temperatura e umidade em tempo real</p>

            <section className="graficos">
                <GraficoBarra />
            </section>

            <section className="tabela-leituras">
                <table>
                    <thead>
                        <tr>
                            <th>Horário</th>
                            <th>Qualidade Ar</th>
                            <th>IQA</th>
                            <th>Temperatura</th>
                            <th>Umidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            leituras.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.horario}</td>
                                    <td>{item.qualidadeAr}</td>
                                    <td>{item.iqa}</td>
                                    <td>{item.temperatura}</td>
                                    <td>{item.umidade}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </div>
        </>
    )
}