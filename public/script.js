window.addEventListener('load', function() {
  const rain = document.createElement("div");
  rain.classList.add("rain");

  // добавляем дождь на страницу
  document.body.appendChild(rain);

  // создаем элементы для капель дождя
  for (let i = 0; i < 40; i++) {
    const drop = document.createElement("div");
    drop.classList.add("drop");
    drop.style.left = Math.random() * window.innerWidth + "px";
    drop.style.animationDelay = Math.random() * 5 + "s";
    rain.appendChild(drop);
  }

  // добавляем стили для плавного появления дождя
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
