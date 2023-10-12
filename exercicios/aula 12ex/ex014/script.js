function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'imagens/bomdia.png'
        document.body.style.background = '#fcd2a8'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'imagens/boatarde.png'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE!
        img.src = 'imagens/boanoite.png'
        document.body.style.background = '#65507C'
    }
}