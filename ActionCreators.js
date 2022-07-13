const { store } = require("./index.js");
const {addToCart, removeFromCart,clearCart,changeQuantity} = require("./ActionTypes")


const addToCartThunk = (item) => (dispatch, getState) => {
  let { id, quantity } = item;
  let prevState = getState();
  if (prevState.find((item) => item.id === id)) {
    store.dispatch({ type: changeQuantity, payload: { id, quantity } });
  } else {
    store.dispatch({ type: addToCart, payload: item });
  }
};

const deleteItem = (id) => {
  store.dispatch({ type: removeFromCart, payload: id });
};

const clear = () => {
  store.dispatch({ type: clearCart });
};

const addItem = (item) => store.dispatch(addToCartThunk(item));

module.exports = { addItem,  deleteItem, clear };
