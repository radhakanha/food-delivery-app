import { createContext } from "react";
//Creating a general context
const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});
export default CartContext;
