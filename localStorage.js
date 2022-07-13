exports.getPersistentState = () => {
  if (JSON.parse(localStorage.getItem("generic-redux")) === null) {
    localStorage.setItem("generic-redux", JSON.stringify([]));
    return JSON.parse(localStorage.getItem("generic-redux"));
  } else {
    console.log(JSON.parse(localStorage.getItem("generic-redux")));
    // return JSON.parse(localStorage.getItem("generic-redux"));
  }
};

exports.setPersistentState = (store) => {
  if (store.getState().length < 1) {
    return localStorage.setItem("generic-redux", JSON.stringify([]));
  } else
    localStorage.setItem("generic-redux", JSON.stringify(store.getState()));
};
