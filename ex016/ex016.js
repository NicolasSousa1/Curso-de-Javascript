function contar() {

    let inicio = Number(document.getElementById("inicio").value)
    let fim = Number(document.getElementById("fim").value)
    let passo = Number(document.getElementById("passo").value)
    let res = document.getElementById("res")

    res.innerHTML = ""

    if (passo <= 0) {
        alert("Passo inválido!")
        return
    }

    for (let i = inicio; i <= fim; i += passo) {

        if(i == fim || i + passo > fim) {
            res.innerHTML += `${i}.`
        } else {
            res.innerHTML += `${i}, `
        }
    }

}