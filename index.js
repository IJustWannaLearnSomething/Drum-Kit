//loop to add event listeners to all drum buttons
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  //Check for click event and pass the innerText to function makeSound
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    makeSound(this.innerText);
    animateButton(this.innerText);
  });
}

//Check for keydown event and pass the key to function makeSound
document.addEventListener("keydown", function() {
  makeSound(event.key);
  animateButton(event.key);
});

//function to check which charecter is pressed/clicked and plays sound accordingly
function makeSound(key) {

  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let kick = new Audio("sounds/kick.wav");
      kick.play();
      break;
    case "k":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "l":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default:
      alert("OOPS! You pressed the wrong key!");
      break;
  }
}

//function to animate button
function animateButton(charecter) {
  document.querySelector("." + charecter).classList.add("pressed");
  setTimeout(function() {
    document.querySelector("." + charecter).classList.remove("pressed");
  }, 100);
}
