const opciones = document.querySelectorAll('.option');
const secciones = document.querySelectorAll('.seccion');

for (let i = 1; i < secciones.length; i++) {
  secciones[i].style.display = 'none';
}
opciones.forEach((opcion, index) => {
  opcion.addEventListener('click', () => {
    opciones.forEach((opcion) => {
      opcion.classList.remove('selected');
    });
    opcion.classList.add('selected');
    secciones.forEach((seccion) => {
      seccion.style.display = 'none';
    });
    secciones[index].style.display = 'block';
  });
});