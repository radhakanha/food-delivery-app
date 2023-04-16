import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals3.jpg";
import classes from "./Header.module.css";
// import CartContext from "../../store/cart-context";
const Header = ({ showCart }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Cart</h1>
        <HeaderCartButton showCart={showCart}></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Food"></img>
      </div>
    </Fragment>
  );
};
export default Header;
