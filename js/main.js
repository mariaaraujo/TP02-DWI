//EXERCÍCIO 01

function calcula_imc() {
    let resultado_ex01 = document.getElementById('resultado_ex01');
    let nome = document.getElementById('nome').value;
    let altura = Number(document.getElementById('altura').value);
    let peso = Number(document.getElementById('peso').value);

    if (nome == '' || altura == '' || peso == '') {

        resultado_ex01.textContent = 'ERRO! Por favor, preencha todos os campos!';
        document.getElementById('resultado_ex01').style.color = '#ff0000';

    } else {
        const imc = (peso / (altura * altura)).toFixed(1);

        let tipo = '';

        if (imc < 20) {
            tipo = ' PESO ABAIXO DO NORMAL. :/';
            document.getElementById('resultado_ex01').style.color = '#ff0000';
        } else if (imc < 25) {
            tipo = 'PESO NORMAL. :)';
            document.getElementById('resultado_ex01').style.color = '#00ab00';
        } else if (imc < 30) {
            tipo = 'SOBREPESO. :/';
            document.getElementById('resultado_ex01').style.color = '#ffeb00';

        } else if (imc < 35) {
            tipo = 'OBESIDADE LEVE. :/';
        } else if (imc < 40) {
            tipo = 'OBESIDADE MODERADA. :/';
        } else {
            tipo = 'OBESIDADE MÓRBIDA. :/';
            document.getElementById('resultado_ex01').style.color = '#ff0000';
        }

        resultado_ex01.textContent = nome + ", seu IMC é " + imc + " e você está com: " + tipo;
    }
}

//EXERCÍCIO 02
function contar(){
    let select_inicio = document.getElementById('inicio');
    let inicio = select_inicio.options[select_inicio.selectedIndex].value;
    let select_fim = document.getElementById('fim');
    let fim = select_fim.options[select_fim.selectedIndex].value;
    let resultado = document.getElementById('resultado_ex02');
    
    if(inicio == fim){
        resultado.innerHTML = `Os valores são iguais!`
    }
    else{
        while(inicio >= fim){
            resultado.innerHTML += ` ${inicio} &#8594; `;
            inicio--;
    }
  }
}

//EXERCÍCIO 03
function calcula_abono(){
    let resultado_ex03 = document.getElementById('resultado_ex03');
    let nome_funcionario = document.getElementById('nome_funcionario').value;
    let salario = Number(document.getElementById('salario').value);
    let vendas = Number(document.getElementById('vendas').value);
    let abono;

    if (nome_funcionario == '' || salario == '' || vendas == '') {

        resultado_ex03.textContent = 'ERRO! Por favor, preencha todos os campos!';
        document.getElementById('resultado_ex03').style.color = '#ff0000';

    }
    else{
        if(vendas < 5000){
            abono = vendas * 0.10.toFixed(2);
        } else if(vendas < 8000){
            abono = vendas * 0.13.toFixed(2);
        } else{
            abono = vendas * 0.16.toFixed(2);
        }
        resultado_ex03.textContent = nome_funcionario + ", este mês você recebeu um abono de R$" + abono + ". Portanto seu salário será de R$" + (salario + abono);
    }

    
}
