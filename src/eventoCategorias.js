import dataFotos from './datos/fotos';
const contenedorCategorias = document.getElementById('categorias');
const galeria = document.getElementById('galeria');
const galeriaSlides = document.querySelector('.galeria__carousel-slides');

contenedorCategorias.addEventListener('click', (e) => {
  e.preventDefault();
  if(e.target.closest('a')) {
    galeria.classList.add('galeria--active');
    document.body.style.overflow = 'hidden';
    const categoriaActiva = e.target.dataset.categoria;
    // Enlazar las fotos de datFotos con la categoriaActiva
    const fotos = dataFotos.fotos[categoriaActiva];
    // Mostrar fotos del slide de las categorias
    fotos.forEach((foto) => {
      const slide = `
        <a href="#" class="galeria__carousel-slide">
          <img class="galeria__carousel-image" src="${foto.ruta}" alt="" />
        </a>
      `
      galeriaSlides.innerHTML += slide 
    })

    // Argegar clase al primera elemento del slide
    galeriaSlides.querySelector('.galeria__carousel-slide:first-child').classList.add('galeria__carousel-slide--active')
  }
})