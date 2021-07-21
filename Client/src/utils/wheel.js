export function hideInstructions() {

  var T = document.getElementById("hideDiv");
  var C = document.getElementById("showDiv")
  T.style.display = "block";  // <-- Set it to hide until cups btn pressed
  C.style.display = "none";
}

