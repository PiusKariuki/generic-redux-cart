const {addToCart, removeFromCart,clearCart,changeQuantity} = require("./ActionTypes")

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
      return state.filter(item => item.id !== id);
      // return state
    }

    case clearCart:
      return initialState;

    default:
      return state;
  }
};


module.exports = reducer