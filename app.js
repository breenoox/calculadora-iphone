function adicionarNumero(numero) {
    const teste = document.getElementById('tela').value += numero;
}

function simboloOperacao(c) {
    return ['+', '-', '*', '/',].includes(c);
}

function adicionarOperacao(operacao) {
    const tela = document.getElementById('tela').value;
        if (tela !== '' && !simboloOperacao(tela.slice(-1))) {
            document.getElementById('tela').value += operacao;
        }
}

function adicionarOperacaoPorcentagem() {
    const tela = document.getElementById('tela').value;
    if(tela === '') {
        document.getElementById('tela').value = '';
    } else {
        const numero = document.getElementById('tela').value = eval(document.getElementById('tela').value);
        const resultado = numero / 100;
        document.getElementById('tela').value = resultado;
    }
}

function adicionarNumeroNegativo() {
    const tela = document.getElementById('tela').value;
    if(tela === '') {
        document.getElementById('tela').value = '';
    } else {
        const numero = document.getElementById('tela').value = eval(document.getElementById('tela').value);
        const resultado = numero * -1;
        document.getElementById('tela').value = resultado;
    }
    
}

function calcular() {
    const tela = document.getElementById('tela').value;
    if(tela === '') {
        document.getElementById('tela').value = '';
    } else {
        try {
            document.getElementById('tela').value = eval(document.getElementById('tela').value);
        } catch (e) {
            document.getElementById('tela').value = 'Erro';
        }
    }
}

function limpar() {
    document.getElementById('tela').value = '';
}

function numerotela(numero1, numero2) {
    console.log(numero1, numero2)
} 