function contar() {
    let ini = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let res = document.getElementById("res")

   if (ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        res.innerHTML = "Impossivel contar!"
   }  else {
        res.innerHTML = "Contando:"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert("Passo inválido! considerando passo 1")
            p = 1
        }
        if (i < f) {
            for(let c = i; c <= f; c+= p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        } else{
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \U{1F449}`
            }
        }
        res.innerHTML += '\u{1F3C1}'
    }

}
