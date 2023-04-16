import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context"; //Dont import CartProvider
const HeaderCartButton = ({ showCart }) => {
  const [cartButtonAnimation, setCartButtonAnimation] = useState(false);
  const { items } = useContext(CartContext);
  const totalQuantity = items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  // console.log(typeof totalQuantity);

  const buttonClasses = `${classes.button} ${
    cartButtonAnimation ? classes.bump : ""
  }`;
  useEffect(() => {
    if (items.length > 0) setCartButtonAnimation(true);
    const timer = setTimeout(() => {
      setCartButtonAnimation(false);
    }, 300);
    return () => clearTimeout(timer); //Cleanup function;
  }, [items]);

  return (
    <button onClick={showCart} className={buttonClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart </span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};
export default HeaderCartButton;
