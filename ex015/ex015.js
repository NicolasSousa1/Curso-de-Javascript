function verificarIdade() {

    var data = new Date();
    var anoAtual = data.getFullYear();

    var anoNascimento = document.getElementById('ano').value;
    var sexo = document.getElementsByName('sexo');
    var resultado = document.getElementById('resultado');
    var imagem = document.getElementById('imagem')

    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    img.setAttribute('alt', 'Foto');

    if (anoNascimento > anoAtual || anoNascimento < 1900) {
        alert('Ano de nascimento inválido. Por favor, insira um ano válido.');
        return;
    }
    if (sexo[0].checked) {
        resultado.innerHTML = `Você é do sexo masculino e nasceu em ${anoNascimento}.`;
        img.setAttribute('src', 'cbum.png');
        //imagem.appendChild(img);
}   else{
        resultado.innerHTML = `Você é do sexo feminino e nasceu em ${anoNascimento}.`;
        img.setAttribute('src', 'anadearmas.png');
        //imagem.appendChild(img);
}
    imagem.innerHTML = ''; // Limpa a imagem anterior
    imagem.appendChild(img);

}

