for (let i = 0; i < 1080; i++) {
  $container = $(".container");
  $squares = $("<div></div>");
  $squares.addClass("item").appendTo($container);
}

var animation = anime({
  targets: ".item",
  keyframes: [
    {
      translateY: function () {
        return anime.random(-250, 250);
      },
    },
    {
      translateX: function () {
        return anime.random(-750, 750);
      },
    },
  ],
  delay: anime.stagger(10),
  rotate: anime.stagger([-360, 360]),
  rotate: "2turn",
  backgroundColor: getColor(),
  borderRadius: ["0%", "50%"],
  easing: "easeInOutQuad",
  direction: "alternate",
  loop: true,
  duration: 3000,
  scale: 1.5,
  opacity: { value: .6, duration: 50}

});

function getColor() {
  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);

  var color = "rgb(" + r + "," + g + "," + b + ")";

  return color;
}

document.querySelector("#play").onclick = animation.play;
document.querySelector("#pause").onclick = animation.pause;
