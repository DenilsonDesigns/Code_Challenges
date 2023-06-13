// @NOTE: this works but not exactly as desired. play around with it to get it working right.
const transformBox = document.querySelector(".transform-box");
const resizeHandles = document.querySelectorAll(".resize-handle");
let isResizing = false;
let originalMouseX, originalMouseY, originalWidth, originalHeight;

// Function to handle mouse down event on resize handles
function handleMouseDown(e) {
  e.preventDefault();
  isResizing = true;
  originalMouseX = e.clientX;
  originalMouseY = e.clientY;
  originalWidth = parseFloat(getComputedStyle(transformBox).width);
  originalHeight = parseFloat(getComputedStyle(transformBox).height);
}

// Function to handle mouse move event during resizing
function handleMouseMove(e) {
  if (!isResizing) return;
  const deltaX = e.clientX - originalMouseX;
  const deltaY = e.clientY - originalMouseY;
  transformBox.style.width = originalWidth + deltaX + "px";
  transformBox.style.height = originalHeight + deltaY + "px";
}

// Function to handle mouse up event after resizing
function handleMouseUp() {
  isResizing = false;
}

// Add event listeners to resize handles
resizeHandles.forEach((handle) => {
  handle.addEventListener("mousedown", handleMouseDown);
});

document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("mouseup", handleMouseUp);
