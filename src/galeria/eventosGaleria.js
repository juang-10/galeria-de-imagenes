import { cerrarGaleria } from "./cerrarGaleria";

const galeria = document.getElementById('galeria');

// Evento de cerrar galeria desde el botón X
galeria.addEventListener('click', (e) => {
  const boton = e.target.closest('button')
  if(boton?.dataset.accion === 'cerrar-galeria') {
    cerrarGaleria();
  }
})
