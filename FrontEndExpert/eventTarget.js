class EventTarget {
  constructor() {
    this.listeners = {};
  }

  addEventListener(name, callback) {
    if (!this.listeners.hasOwnProperty(name)) {
      this.listeners[name] = new Set([callback]);
    } else {
      this.listeners[name].add(callback);
    }
  }

  removeEventListener(name, callback) {
    this.listeners[name]?.delete(callback);
  }

  dispatchEvent(name) {
    this.listeners[name]?.forEach((cb) => cb());
  }

  alertify() {
    alert("ALERT");
  }
}

const eventTarget = new EventTarget();

document
  .getElementById("henlo")
  .addEventListener("click", eventTarget.alertify);
