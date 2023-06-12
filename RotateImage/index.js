const rotated = document.getElementById("rotated");
// rotated.style.transform = "rotate(180deg)";
// rotated.style.transform = "rotate(-90deg)";
// rotated.style.transform = "rotate(-135deg)";
// Rotate image by 90 degrees clockwise
// rotated.style.transform = "rotate(90deg)";
// Rotate image about top-left corner
// rotated.style.transformOrigin = "top left";
// function rotateImage() {
//   // Rotate image by 90 degrees clockwise
//   rotated.style.transform = "rotate(90deg)";
// }
// Variable to hold the current angle of rotation
let rotation = 0;
// How much to rotate the image at a time
const angle = 90;
function rotateImage() {
  // Ensure angle range of 0 to 359 with "%" operator,
  // e.g., 450 -> 90, 360 -> 0, 540 -> 180, etc.
  rotation = (rotation + angle) % 360;
  rotated.style.transform = `rotate(${rotation}deg)`;
}
