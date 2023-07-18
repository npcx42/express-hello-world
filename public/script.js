document.addEventListener('DOMContentLoaded', function() {

  const rain = document.createElement("div");
  rain.classList.add("rain");

  window.addEventListener("load", function () {
    var video = document.getElementById("background-video");

    var videoUrl =
      "https://cdn.glitch.global/8d405379-8d96-4ae1-b2bc-6b3e509d8a3c/setmefree.mp4?v=1689702089964";

    video.src = videoUrl;
  });

  document.body.appendChild(rain);

  for (let i = 0; i < 30; i++) {
    const drop = document.createElement("div");
    drop.classList.add("drop");
    drop.style.left = Math.random() * window.innerWidth + "px";
    drop.style.animationDelay = Math.random() * 5 + "s";
    rain.appendChild(drop);
  }

  const style = document.createElement("style");
  style.innerHTML = `
    .rain {
      opacity: 0;
      animation: fadeIn 2s forwards;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);
});
