let num = document.getElementById('numero');
let res = document.getElementById('res');
let vetor = [];

function analisar() {
    
    if (num.value.length == 0) {
        alert('Digite um número!');
    } else if (vetor.indexOf(Number(num.value)) != -1) {
        alert('Número já adicionado!');
    } else if (Number(num.value) < 1 || Number(num.value) > 100) {
        alert('Número inválido! Digite um número entre 1 e 100.');
    } else{

        vetor.push(Number(num.value));
        console.log(vetor);
        let item = document.createElement('div');
        item.setAttribute('class', 'container-item');
        item.innerHTML = `Número ${num.value} adicionado.`;
        res.appendChild(item);
        
        num.focus();

    }

}

function finalizar() {

    res.innerHTML = '';

    if (vetor.length == 0) {
        alert('Adicione valores antes de finalizar!');
    } else{

        let final = document.createElement('div');
        final.setAttribute('class', 'container-item');
        final.innerHTML = `Ao todo, temos ${vetor.length} números cadastrados. <br>`;
        final.innerHTML += `O maior valor informado foi ${Math.max(...vetor)}. <br>`;
        final.innerHTML += `O menor valor informado foi ${Math.min(...vetor)}. <br>`;
        final.innerHTML += `Somando todos os valores, temos ${vetor.reduce((a, b) => a + b, 0)}. <br>`;
        final.innerHTML += `A média dos valores digitados é ${(vetor.reduce((a, b) => a + b, 0) / vetor.length).toFixed(2)}.`;
        res.appendChild(final);

    }

}