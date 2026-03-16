import {useState} from 'react';

export default function Calculadora({titulo}){
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resultado, setResultado] = useState(0);

    function somar(e){
        e.preventDefault();
        setResultado(Number(num1) + Number(num2));
        return resultado
    }
    return(
        <>
            <h1>{titulo}</h1>
            <div>
                <form action="">
                    <div className="numero">
                        <label htmlFor="numero1">Número 1:</label>
                        <input type="number" placeholder="0" value={num1} onChange={(e) => setNum1(e.target.value)} />
                    </div>
                    <div className="numero">
                        <label htmlFor="numero2">Número 2:</label>
                        <input type="number" placeholder="0" value={num2} onChange={(e) => setNum2(e.target.value)} />
                    </div>
                    <button onClick={somar}>Somar</button>
                    <span>Resultado: {resultado}</span>
                </form>
            </div>
        </>
    )
}