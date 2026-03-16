import {useState} from 'react';

export default function Calculadora({titulo}){
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resultado, setResultado] = useState(0);

    function verificarNum(){
        if (Number(num1) <= 0 || Number(num2) <= 0){
            alert("Os valores não podem ser nulos e negativos");
            return
        }
    }

    function somar(e){
        e.preventDefault();
        setResultado(Number(num1) + Number(num2));
        verificarNum()
        return resultado
    }
    function subtrair(e){
        e.preventDefault();
        setResultado(Number(num1) - Number(num2));
        verificarNum()
        return resultado
    }
    function multiplicar(e){
        e.preventDefault();
        setResultado(Number(num1) * Number(num2));
        verificarNum()
        return resultado
    }
    function dividir(e){
        e.preventDefault();
        setResultado(Number(num1) / Number(num2));
        verificarNum()
        return resultado
    }
    function potencia(e){
        e.preventDefault();
        setResultado(Number(num1) ** Number(num2));
        verificarNum()
        return resultado
    }
    function limpar(){
        setNum1(0);
        setNum2(0)
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
                    <div className="botoes">
                        <button onClick={somar}>Somar</button>
                        <button onClick={subtrair}>Subtrair</button>
                        <button onClick={multiplicar}>Multiplicar</button>
                        <button onClick={dividir}>Dividir</button>
                        <button onClick={potencia}>Potencia</button>
                        <button className='limpar' onClick={limpar}>Limpar</button>
                    </div>
                    <span>Resultado: {resultado}</span>
                </form>
            </div>
        </>
    )
}