function tabuada(){

    var num = Number(document.getElementById('numero').value)
    var res = document.getElementById('res')
    
    res.innerHTML = ""

    for(var i = 1; i<=10; i++){

        res.innerHTML += `${num} x ${i} = ${num*i}<br>`

    }

}