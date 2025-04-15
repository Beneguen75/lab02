// Seleção de elementos DOM
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const operadorAritmetico = document.querySelector('#opAritmetico');
const resultadoAritmetico = document.querySelector('#resultado');

const operando1 = document.querySelector('#op1');
const operando2 = document.querySelector('#op2');
const operadorLogico = document.querySelector('#opLogico');
const resultadoLogico = document.querySelector('#resultadoLog');

// Função para cálculos aritméticos
const executarCalculoAritmetico = (operador, valor1, valor2) => {
    if (isNaN(valor1) || isNaN(valor2)) return 'Entrada inválida';
    switch (operador) {
        case '+': return valor1 + valor2;
        case '-': return valor1 - valor2;
        case '*': return valor1 * valor2;
        case '/': return valor2 !== 0 ? valor1 / valor2 : 'Erro: Divisão por zero';
        default: return 'Operação inválida';
    }
};

// Atualizar resultado aritmético
const atualizarResultadoAritmetico = () => {
    const valor1 = parseFloat(num1.value);
    const valor2 = parseFloat(num2.value);
    resultadoAritmetico.textContent = executarCalculoAritmetico(operadorAritmetico.value, valor1, valor2);
};

// Eventos para cálculos aritméticos
[num1, num2, operadorAritmetico].forEach(elemento => {
    elemento.addEventListener('input', atualizarResultadoAritmetico);
});

// Função para cálculos lógicos
const executarCalculoLogico = (operador, valor1, valor2) => {
    const op1 = parseInt(valor1, 10);
    const op2 = parseInt(valor2, 10);
    if (isNaN(op1) || isNaN(op2)) return 'Entrada inválida';
    switch (operador) {
        case '&': return op1 & op2;
        case '|': return op1 | op2;
        default: return 'Operação inválida';
    }
};

// Atualizar resultado lógico
const atualizarResultadoLogico = () => {
    const valor1 = operando1.value;
    const valor2 = operando2.value;
    resultadoLogico.textContent = executarCalculoLogico(operadorLogico.value, valor1, valor2);
};

// Eventos para cálculos lógicos
[operando1, operando2, operadorLogico].forEach(elemento => {
    elemento.addEventListener('input', atualizarResultadoLogico);
});