  const video = document.getElementById("videoInicio");
  const poster = document.getElementById("posterOverlay");

  video.addEventListener("ended", () => {
    poster.style.animation = "none";
    poster.offsetHeight;
    poster.style.animation = "desvanecerPoster 2.8s ease forwards";

    video.currentTime = 0;
    video.play();
  });