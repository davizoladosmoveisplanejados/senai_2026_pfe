'use client';
import { useState } from "react";

export default function Calculadora() {
    const [display, setDisplay] = useState('0');
    const [firstNum, setFirstNum] = useState(null);
    const [operation, setOperation] = useState(null);
    const [waitingForSecond, setWaitingForSecond] = useState(false);

    function inputDigit(digit) {
        if (waitingForSecond) {
            setDisplay(digit);
            setWaitingForSecond(false);
        } else {
            setDisplay(display === '0' ? digit : display + digit);
        }
    }

    function inputDot() {
        if (waitingForSecond) {
            setDisplay('0.');
            setWaitingForSecond(false);
            return;
        }
        if (!display.includes('.')) {
            setDisplay(display + '.');
        }
    }

    function handleOperator(nextOp) {
        const current = parseFloat(display);

        if (firstNum !== null && operation && !waitingForSecond) {
            const result = calcular(firstNum, current, operation);
            setDisplay(formatResult(result));
            setFirstNum(result);
        } else {
            setFirstNum(current);
        }

        setOperation(nextOp);
        setWaitingForSecond(true);
    }

    function calcular(a, b, op) {
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '×': return a * b;
            case '÷': return b !== 0 ? a / b : 'Erro';
            default: return b;
        }
    }

    function handleEqual() {
        if (firstNum === null || operation === null) return;

        const current = parseFloat(display);
        const result = calcular(firstNum, current, operation);
        setDisplay(formatResult(result));
        setFirstNum(null);
        setOperation(null);
        setWaitingForSecond(false);
    }

    function handleClear() {
        setDisplay('0');
        setFirstNum(null);
        setOperation(null);
        setWaitingForSecond(false);
    }

    function handleToggleSign() {
        if (display !== '0') {
            setDisplay(display.startsWith('-') ? display.slice(1) : '-' + display);
        }
    }

    function handlePercent() {
        setDisplay(formatResult(parseFloat(display) / 100));
    }

    function handleSqrt() {
        const val = parseFloat(display);
        if (val < 0) {
            setDisplay('Erro');
        } else {
            setDisplay(formatResult(Math.sqrt(val)));
        }
    }

    function formatResult(val) {
        if (val === 'Erro') return 'Erro';
        if (Number.isInteger(val)) return val.toString();
        return parseFloat(val.toFixed(8)).toString();
    }

    // Shrink font if display is long
    function displayFontSize() {
        if (display.length > 12) return '2rem';
        if (display.length > 8) return '2.8rem';
        return '3.5rem';
    }

    return (
        <div className="calculator">
            <div className="display">
                <div className="display-result" style={{ fontSize: displayFontSize() }}>
                    {display}
                </div>
            </div>

            <div className="btn-grid">
                <button className="btn btn-light" onClick={handleClear}>AC</button>
                <button className="btn btn-light" onClick={handleToggleSign}>±</button>
                <button className="btn btn-light" onClick={handleSqrt}>√</button>
                <button className="btn btn-orange" onClick={() => handleOperator('÷')}>÷</button>

                <button className="btn btn-dark" onClick={() => inputDigit('7')}>7</button>
                <button className="btn btn-dark" onClick={() => inputDigit('8')}>8</button>
                <button className="btn btn-dark" onClick={() => inputDigit('9')}>9</button>
                <button className="btn btn-orange" onClick={() => handleOperator('×')}>×</button>

                <button className="btn btn-dark" onClick={() => inputDigit('4')}>4</button>
                <button className="btn btn-dark" onClick={() => inputDigit('5')}>5</button>
                <button className="btn btn-dark" onClick={() => inputDigit('6')}>6</button>
                <button className="btn btn-orange" onClick={() => handleOperator('-')}>−</button>

                <button className="btn btn-dark" onClick={() => inputDigit('1')}>1</button>
                <button className="btn btn-dark" onClick={() => inputDigit('2')}>2</button>
                <button className="btn btn-dark" onClick={() => inputDigit('3')}>3</button>
                <button className="btn btn-orange" onClick={() => handleOperator('+')}>+</button>

                <button className="btn btn-dark btn-wide" onClick={() => inputDigit('0')}>0</button>
                <button className="btn btn-dark" onClick={inputDot}>.</button>
                <button className="btn btn-orange" onClick={handleEqual}>=</button>
            </div>
        </div>
    );
}