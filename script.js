document.getElementById("click-me").onclick = function () {
  alert("You clicked the button");
};

document.getElementById("hover-me").onmouseover = function () {
  alert("You move the cursor over me");
};

document.getElementById("leave-me").onmouseout = function () {
  alert("You move the cursor out of me");
};

document.onkeydown = function (event) {
  if (event.keycode == 65) {
    alert('You have just pressed the "a" key.');
  } else {
    console.log("You have just pressed a different key.");
  }
};

// function show_alert() {
//   alert("You click the Button !!!");
// }
