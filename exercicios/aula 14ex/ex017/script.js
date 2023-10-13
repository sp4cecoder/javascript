/*var n = document.getElementById('inum')
// var box = Number(n1.value)
var res = documente.getElementById('res')
var n1 = Number(n.value) */

function gerar() {
    let num = document.getElementById('inum')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favvor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}

