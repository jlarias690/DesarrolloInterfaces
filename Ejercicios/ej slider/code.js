// Obtener los elementos del slider
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

// Variables para controlar el estado del slider
let currentIndex = 0;
const slideWidth = slides[0].clientWidth;

// Función para mostrar el slide actual
function showSlide(index) {
  // Calcular la posición del slide actual
  const position = -index * slideWidth;

  // Aplicar la transformación CSS para mostrar el slide actual
  slider.style.transform = `translateX(${position}px)`;
}

// Función para avanzar al siguiente slide
function nextSlide() {
  currentIndex++;

  // Verificar si se llegó al final del slider
  if (currentIndex === slides.length) {
    currentIndex = 0;
  }

  showSlide(currentIndex);
}

// Función para retroceder al slide anterior
function prevSlide() {
  currentIndex--;

  // Verificar si se llegó al inicio del slider
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }

  showSlide(currentIndex);
}

// Agregar eventos a los botones de navegación
document.querySelector(".next-btn").addEventListener("click", nextSlide);
document.querySelector(".prev-btn").addEventListener("click", prevSlide);
