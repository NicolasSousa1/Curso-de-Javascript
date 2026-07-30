function verificarIdade() {

    var data = new Date();
    var anoAtual = data.getFullYear();

    var anoNascimento = document.getElementById('ano').value;
    var sexo = document.getElementsByName('sexo');
    var resultado = document.getElementById('resultado');
    var imagem = document.getElementById('imagem')

    var img = document.createElement('img');

    if (anoNascimento > anoAtual || anoNascimento < 0) {
        alert('Ano de nascimento inválido. Por favor, insira um ano válido.');
        return;
    }
    if (sexo[0].checked) {
        resultado.innerHTML = `Você é do sexo masculino e nasceu em ${anoNascimento}.`;
        img.src = 'cbum.png';
        imagem.appendChild(img);
} else{
    resultado.innerHTML = `Você é do sexo feminino e nasceu em ${anoNascimento}.`;
    img.src = 'AnadeArmas.png';
    imagem.appendChild(img);
}
}

