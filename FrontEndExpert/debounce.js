function debounce(callback, delay, immediate = false) {
  let timerID;

  return function (...args) {
    // cancel any pendings callbacks:
    clearTimeout(timerID);

    // only call immediate if timerID is null and param immediate is true;
    // clearTimeout would kill any pending callbacks, but it would not be executed immediately
    // if theres a regular debounce callback pending.
    const shouldCallImmediately = timerID == null && immediate;
    if (shouldCallImmediately) {
      callback.apply(this, args);
    }

    timerID = setTimeout(() => {
      if (!immediate) {
        callback.apply(this, args);
      }
      timerID = null;
    }, delay);
  };
}

// Do not edit the line below.
exports.debounce = debounce;
