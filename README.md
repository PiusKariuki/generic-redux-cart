<h1>A GENERIC CART BASED ON REDUX</h1>

<h2>Methods</h2>

<h3>add to cart</h3>

<pre>
<h3>import { addItem } from "generic-redux-cart/index.js";</h3>
<h3>
const newItem = {
name: "Mazda cx9",
price: 240000,
quantity: 1,
id: 8,
};
</h3>

<h3>addItem(newItem);</h3>
</pre>


<h3>clear cart</h3>
<pre>
<h3>import { clear} from "generic-redux-cart/index.js";</h3>

<h3>clear();</h3>
</pre>

<h3>remove item from cart</h3>


<pre>
<h3>
import {deleteItem} from "generic-redux-cart/index.js";
</h3>
<h3>deleteItem(itemId)</h3>
</pre>

<h3>subscribe to cart changes</h3>
<pre>
<h3>import {subscribe} from "generic-redux-cart/index.js";</h3>

<h3>subscribe() //returns state</h3>
</pre>
