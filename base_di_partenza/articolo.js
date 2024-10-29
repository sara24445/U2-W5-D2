// Mostra e nasconde il pulsante in base allo scroll
window.onscroll = function () {
  const button = document.getElementById('scrollToTopBtn')
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    button.style.display = 'block' // Mostra il pulsante
  } else {
    button.style.display = 'none' // Nasconde il pulsante
  }
}

// Scrolla verso la cima della pagina quando il pulsante è cliccato
document.getElementById('scrollToTopBtn').onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' }) // Scrolla in modo liscio
}
// Mostra e nasconde il pulsante in base allo scroll
window.onscroll = function () {
  const button = document.getElementById('scrollToTopBtn')
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    button.style.display = 'block' // Mostra il pulsante
  } else {
    button.style.display = 'none' // Nasconde il pulsante
  }
}

// Scrolla verso la cima della pagina quando il pulsante è cliccato
document.getElementById('scrollToTopBtn').onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' }) // Scrolla in modo liscio
}
