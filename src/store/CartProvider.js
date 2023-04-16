import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotal =
      state.totalAmount + action.item.price * action.item.quantity;

    //findIndex returns the index of first element which matches the return condition. If element not found it returns -1
    const existingItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });
    // console.log(existingItemIndex);
    // existingItem will be undefined if existingItemIndex is -1 else existingItem will be item object:
    const existingItem = state.items[existingItemIndex];
    // console.log(existingItem);
    let updatedItemsArr; //A new array that will hold updated quantity of an Item and also new Items
    if (existingItem) {
      //If there is no existingItem (undefined) then if check is false
      const updatedExistingItem = {
        ...existingItem,
        quantity: existingItem.quantity + action.item.quantity,
      };
      // console.log(updatedExistingItem);
      updatedItemsArr = [...state.items];
      updatedItemsArr[existingItemIndex] = updatedExistingItem;
    } else {
      updatedItemsArr = state.items.concat(action.item);
    }

    return {
      items: updatedItemsArr,
      totalAmount: updatedTotal,
    };
  }
  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });
    const existingItem = state.items[existingItemIndex];
    const updatedTotal = state.totalAmount - existingItem.price;
    let updatedItemsArr;
    if (existingItem.quantity === 1) {
      updatedItemsArr = state.items.filter((item) => {
        return item.id !== action.id;
      });
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItemsArr = [...state.items];
      updatedItemsArr[existingItemIndex] = updatedItem;
    }
    return {
      items: updatedItemsArr,
      totalAmount: updatedTotal,
    };
  }
  return state;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartValues = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartValues}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
