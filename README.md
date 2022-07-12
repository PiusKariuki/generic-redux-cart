#A GENERIC CART BASED ON REDUX

##Methods

###add to cart
`
import { addItem } from "generic-redux-cart/index.js";

const newItem = {
name: "Mazda cx9",
price: 240000,
quantity: 1,
id: 8,
};

addItem(newItem);
`

###clear cart
`
import { clear} from "generic-redux-cart/index.js";

clear();

`

###remove item from cart
`
import {deleteItem} from "generic-redux-cart/index.js";
deleteItem(itemId)

`

###subscribe to cart changes
`
import {subscribe} from "generic-redux-cart/index.js";

subscribe() //returns state
`
