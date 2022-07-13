const Redux = require("redux");
const reduxThunk = require("redux-thunk").default;
const {getPersistentState, setPersistentState} = require("./localStorage")
const reducer = require("./reducer")


const applyMiddleware = Redux.applyMiddleware;

const store = Redux.createStore(reducer,getPersistentState(), applyMiddleware(reduxThunk));

 store.subscribe(() => {
  setPersistentState(store);
  console.log(store.getState())
  return store.getState();
});


module.exports = { store };
