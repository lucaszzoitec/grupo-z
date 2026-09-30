console.log("Grupo Z no ar 🚀");
// aqui depois a gente bota o efeito de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
  });
});
/* AJUSTE PARA CELULAR */
@media (max-width: 768px) {
  header nav {
    flex-direction: column;
    gap: 15px;
  }
  ul {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    padding: 0;
  }
  .hero {
    height: auto;
    padding: 60px 20px;
  }
  .hero h1 {
    font-size: 32px !important;
  }
  .ecossistema {
    grid-template-columns: 1fr;
    padding: 20px;
  }
  .card {
    padding: 25px;
  }
}