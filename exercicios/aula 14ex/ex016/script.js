function contar() {
    var first = document.getElementById('start')
    var last = document.getElementById('end')
    var passo = document.getElementById('ipassos')
    var res = document.getElementById('res')

    if (first.value.length == 0 || last.value.length == 0 || passo.value.length == 0) {
     // window.alert('[ERROR] Faltam dados')  
     res.innerHTML = 'Impossível contar' 
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(first.value)
        var l = Number(last.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < l) {
            // Contagem crescente
                for (var c = i; c <= l; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //Contagem regressiva
            for (var c = i; c >= l; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}