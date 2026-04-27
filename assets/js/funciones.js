  const btnSubirArriba = document.getElementById("btnSubirArriba");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btnSubirArriba.classList.add("mostrar");
    } else {
      btnSubirArriba.classList.remove("mostrar");
    }
  });

  btnSubirArriba.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });