console.log("Grupo Z no ar 🚀");
// aqui depois a gente bota o efeito de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
  });
});