// *** DOM Elements ***
const messageContent = document.getElementById("message-content");
const durationInput = document.getElementById("duration");
const isCancelableCheckbox = document.getElementById("cancelable");
const successInput = document.getElementById("success");
const addButton = document.getElementById("add-button");
const clearButton = document.getElementById("clear-button");
const toastsContainer = document.getElementById("toasts");

let IS_CANCELABLE = false;

// *** Event Listeners ***
addButton.addEventListener("click", () => {
  const newToastElement = createToastElement({
    message: getMessageContent(),
    isSuccess: getIsSuccess(),
    isCancelable: IS_CANCELABLE,
  });

  toastsContainer.insertBefore(newToastElement, toastsContainer.firstChild);
  removeElementAfterDuration({
    element: newToastElement,
    duration: getDuration(),
  });
});

isCancelableCheckbox.addEventListener("change", function () {
  IS_CANCELABLE = isCancelableCheckbox.checked;
});

clearButton.addEventListener("click", () => {
  while (toastsContainer.firstChild) {
    toastsContainer.removeChild(toastsContainer.firstChild);
  }
});

// *** Functions ***
function getMessageContent() {
  return messageContent.value;
}

function getDuration() {
  const durationValue = durationInput.value;
  return Math.max(durationValue, 500);
}

function getIsSuccess() {
  return successInput.checked;
}

function removeElementAfterDuration({ element, duration }) {
  setTimeout(() => {
    toastsContainer.removeChild(element);
  }, duration);
}

function getMessageMarkup({ message, isSuccess }) {
  if (message) {
    return message;
  }

  return isSuccess ? "Success!" : "Error.";
}

function createToastElement({ message, isSuccess, isCancelable }) {
  const toastDiv = document.createElement("div");
  toastDiv.className = `toast ${isSuccess ? "success" : "error"}-toast`;

  const messageParagraph = document.createElement("p");
  messageParagraph.className = "message";
  messageParagraph.textContent = message;
  messageParagraph.textContent = getMessageMarkup({ message, isSuccess });
  toastDiv.appendChild(messageParagraph);

  if (isCancelable) {
    const cancelButton = document.createElement("button");
    cancelButton.className = "cancel-button";
    cancelButton.textContent = "X";
    toastDiv.appendChild(cancelButton);

    cancelButton.addEventListener("click", () => {
      toastsContainer.removeChild(toastDiv);
    });
  }

  return toastDiv;
}
