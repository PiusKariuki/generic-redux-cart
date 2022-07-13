const Redux = require("redux");
const reduxThunk = require("redux-thunk").default;
const {addToCart, removeFromCart,clearCart,changeQuantity} = require("./ActionTypes")
const {getPersistentState, setPersistentState} = require("./localStorage")

const applyMiddleware = Redux.applyMiddleware;
const initialState = [];

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case addToCart: {
      return [...state, payload];
    }

    case changeQuantity: {
      const { id, quantity } = payload;
      return state.map((item) => {
        if (item.id === id) return { ...item, quantity };
        else return item;
      });
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

const store = Redux.createStore(reducer,getPersistentState(), applyMiddleware(reduxThunk));

const state = store.getState();

const subscribe = store.subscribe(() => {
  setPersistentState(store);
  console.log(store.getState())
  return store.getState();
});


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

module.exports = { clear, addItem, deleteItem, state, subscribe, store };
