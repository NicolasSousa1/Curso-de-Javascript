function carregar() {

var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();

var hora = document.getElementById("Hora");
var img = document.getElementById("imagem");

if (hours < 6) {

    document.body.style.backgroundColor = "#020157e0";
    hora.innerHTML = `Está de Madrugada, Agora são exatamente ${hours} horas e ${minutes} minutos!`;
    img.src = "noite.png";
    

} else if (hours < 12) {
    document.body.style.backgroundColor = "lightblue";
    hora.innerHTML = `Está de Manhã, Agora são exatamente ${hours} horas e ${minutes} minutos!`; 
    img.src = "manhã.png";
    
} else if (hours < 18) {

    document.body.style.backgroundColor = "#ecd466dc";
    hora.innerHTML = `Está de Tarde, Agora são exatamente ${hours} horas e ${minutes} minutos!`;
    img.src = "tarde.png";
    

} else if (hours < 24) {
    document.body.style.backgroundColor = "#020157e0";
    hora.innerHTML = `Está de Noite, Agora são exatamente ${hours} horas e ${minutes} minutos!`;
    img.src = "noite.png";
    
} 

}

carregar();