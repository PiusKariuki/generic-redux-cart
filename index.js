const Redux = require("redux");

const addToCart = "ADDTOCART";
const removeFromCart = "REMOVE";
const clearCart = "CLEARCART";

const initialState = [];

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case addToCart: {
      const { name, price, id, quantity } = payload;
      if (state && state.find((item) => item.id === id)) {
        return state.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + quantity };
          }
          return item;
        });
      }
      return [...state, payload];
    }

    case removeFromCart: {
      const id = payload;
      return state?.filter((item) => item.id !== id);
    }

    case clearCart:
      () => initialState;

    default:
      return state;
  }
};

const persistedState = () =>
  localStorage.getItem("generic-redux-cart") !== null
    ? localStorage.getItem("generic-redux-cart")
    : [];

const store = Redux.createStore(reducer);

const state = store.getState();
const subscribe = store.subscribe(() => {
  console.log(store.getState());
  // localStorage.setItem("generic-redux-cart", store.getState());
  return store.getState();
});

const addItem = (item) => {
  store.dispatch({ type: addToCart, payload: item });
};

const deleteItem = (id) => {
  store.dispatch({ type: removeFromCart, payload: id });
};

const clear = () => {
  store.dispatch({ type: clearCart });
};

// const newItem = {
//   name: "Mazda cx9",
//   price: 240000,
//   quantity: 1,
//   id: 8,
// };

// deleteItem(5);
// addItem(newItem);

module.exports = { clear, addItem, deleteItem, state, subscribe };
