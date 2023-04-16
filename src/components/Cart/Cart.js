import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
// const dummyCart = [
//   { id: "c1", name: "Kadhi Chawal", amount: 150, price: 300 },
//   { id: "c2", name: "Rajma Chawal", amount: 125, price: 250 },
// ];

const Cart = ({ hideCart }) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            item={item}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          ></CartItem>
        );
      })}
    </ul>
  );

  return (
    <Modal hideCart={hideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={hideCart} className={classes[".button--alt"]}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
