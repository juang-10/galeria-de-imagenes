const galeria = document.getElementById('galeria');

// Función para cerrar galeria
export const cerrarGaleria = () => {
  galeria.classList.remove('galeria--active');
  document.body.style.overflow = '';
}