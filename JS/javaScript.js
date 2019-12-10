const paragrafoElement = document.getElementById('paragrafo')
const contDiasElement = document.getElementById('contDias')
const relogioElement = document.getElementById('relogio')
const corpoElement = document.querySelector('body.corpo')
const tituloElement = document.getElementById('titulo')
const tempoElement = document.getElementById('tempo')
const marcaElement = document.getElementById('marca')
const diasElement = document.getElementById('dias')
const infoElement = document.getElementById('info')

const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')
const div3 = document.getElementById('div3')
const div4 = document.getElementById('div4')

relogioElement.addEventListener('mouseenter', Enter)
relogioElement.addEventListener('mouseout', Out)

corpoElement.style.background = 'url(../imagem/fundo1.jpg) no-repeat center center fixed'

function RelogioRegressivo() {
  const data = new Date()

  const anoEvent = 2019
  const mesEvent = 12
  const diaEvent = 9
  const horaEvent = 23
  const minutoEvent = 59

  let ano = data.getFullYear()
  let mes = data.getMonth()
  let dia = data.getDate()
  let hora = data.getHours()
  let minuto = data.getMinutes()
  let segundo = data.getSeconds()

  const anoAux = anoEvent - ano
  const mesAux = mesEvent - mes
  const diaAux = diaEvent - dia
  let horaAux = 1
  let minutoAux = 1

  if (diaAux == 0) {
    horaAux = horaEvent - hora
  }
  if (diaAux == 0 && horaAux == 0) {
    minutoAux = (minutoEvent - minuto)
  }

  if (mesAux >= 0 && diaAux >= 0 && anoAux >= 0 && horaAux >= 0 && minutoAux >= 0) {
    dia = (diaEvent - dia)
    if (diaAux == 0) {
      hora = horaEvent - hora
    } else {
      hora = 23 - hora
    }
    if (diaAux == 0 && horaAux == 0) {
      minuto = (minutoEvent - minuto)
    } else {
      minuto = 59 - minuto
    }
    segundo = 59 - segundo

    if (dia < 10) {
      dia = "0" + dia
    }
    if (hora < 10) {
      hora = "0" + hora
    }
    if (minuto < 10) {
      minuto = "0" + minuto
    }
    if (segundo < 10) {
      segundo = "0" + segundo
    }

    tituloElement.innerHTML = 'Contagem...'

    if (dia == 0 && hora == 0 && minuto == 0 && segundo <= 10) {
      paragrafoElement.style.color = RandomColor()
      div1.style.backgroundColor = RandomColor()
      div2.style.backgroundColor = RandomColor()
      div3.style.backgroundColor = RandomColor()
      div4.style.backgroundColor = RandomColor()
      tituloElement.style.color = RandomColor()

      relogioElement.removeEventListener('mouseenter', Enter)

      corpoElement.style.backgroundColor = 'white'
      paragrafoElement.style.marginTop = '80px'

      infoElement.innerHTML = ''
      contDiasElement.innerHTML = ''
      diasElement.innerHTML = ''
      tempoElement.style.fontSize = '70pt'
      tempoElement.innerHTML = `${segundo}`

      relogioElement.style.height = '160px'
      relogioElement.style.width = '160px'
    } else {
      contDiasElement.innerHTML = `${dia}`
      diasElement.innerHTML = `&nbsp;dia(s)&nbsp;&nbsp;`
      tempoElement.innerHTML = ` ${hora}:${minuto}:${segundo}`
    }

    setTimeout(RelogioRegressivo, 1000)
  } else {
    console.log('O evento já acabou!')

    marcaElement.style.color = 'white'

    div1.style.width = '0px'
    div2.style.width = '0px'
    div3.style.width = '0px'
    div4.style.width = '0px'
    div1.style.height = '0px'
    div2.style.height = '0px'
    div3.style.height = '0px'
    div4.style.height = '0px'

    tituloElement.innerHTML = ''
    paragrafoElement.innerHTML = ''
    contDiasElement.innerHTML = ''
    diasElement.innerHTML = ''
    tempoElement.innerHTML = `<p><strong>Feliz Ano Novo!</strong></p>`
    tempoElement.style.fontSize = '50pt'

    relogioElement.style.width = '210px'
    relogioElement.style.height = '250px'

    corpoElement.style.width = '100%'
    corpoElement.style.height = '100%'
    corpoElement.style.background = 'url(../imagem/fundo2.jpg) no-repeat center center fixed'

    relogioElement.removeEventListener('mouseenter', Enter)
    relogioElement.removeEventListener('mouseout', Out)

    Fim()
  }
}

function Enter() {
  infoElement.innerHTML = 'dia  hora:minuto:segundo'
  infoElement.style.color = 'white'
}

function Out() {
  infoElement.innerHTML = ''
}

function RandomColor() {
  let x = Math.floor(Math.random() * 256)
  let y = Math.floor(Math.random() * 256)
  let z = Math.floor(Math.random() * 256)

  return `rgb(${x}, ${y}, ${z})`
}

function Fim() {
  relogioElement.style.borderColor = RandomColor()
  tituloElement.style.color = RandomColor()
  tempoElement.style.color = RandomColor()

  setTimeout(Fim, 1000)
}
