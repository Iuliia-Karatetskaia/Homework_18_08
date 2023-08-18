function rotationPicture(selec, left = 0, down = 0, startX = 0) {
  let degree = 0;
  let intervalID;
  let widthWindow = window.innerWidth;
  let heightWindow = window.innerHeight;
  let sideMove = 20;
  let downMove = 20;

  function Update() {
    degree += 20;
    left += sideMove;
    down += downMove;
    let image = document.querySelector(selec);
    image.setAttribute(
      "Style",
      `transform: rotate(${degree}deg); left: ${left}px; top: ${down}px`
    );
    if (left + image.clientWidth > widthWindow - startX || left < -startX) {
      sideMove = -sideMove;
    }

    if (down + image.clientHeight > heightWindow || down < 0) {
      downMove = -downMove;
    }

    if (degree > 360) {
      degree -= 360;
    }
  }

  intervalID = setInterval(Update, 50);
}

rotationPicture(".kotik-image");
rotationPicture(".koala-image", 500, 500, 200);
rotationPicture(".panda-image", 700, 0, 400);
