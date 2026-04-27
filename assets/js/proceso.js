    let slideActual = 0;
    const track = document.getElementById("sliderTrack");
    const slides = document.querySelectorAll(".slide-proceso");
    const dots = document.querySelectorAll(".dot");

    function actualizarSlider() {
      track.style.transform = `translateX(-${slideActual * 100}%)`;

      dots.forEach(dot => dot.classList.remove("activo"));
      dots[slideActual].classList.add("activo");
    }

    function moverSlide(direccion) {
      slideActual += direccion;

      if (slideActual < 0) {
        slideActual = slides.length - 1;
      }

      if (slideActual >= slides.length) {
        slideActual = 0;
      }

      actualizarSlider();
    }

    function irSlide(indice) {
      slideActual = indice;
      actualizarSlider();
    }

