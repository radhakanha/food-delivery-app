import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = ({ mealData }) => {
  const { name, description, price, id } = mealData;
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (quantity) => {
    cartCtx.addItem({
      id,
      name,
      quantity: quantity,
      price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>${price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={id} />
      </div>
    </li>
  );
};
export default MealItem;
