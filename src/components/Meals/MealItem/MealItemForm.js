import React from "react";
import { useState, useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = ({ onAddToCart, id }) => {
  const [quantity, setQuantity] = useState(1);
  // console.log(typeof quantity);
  const [quantityIsValid, setQuantityIsValid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();
    if (!quantity || quantity < 1 || quantity > 5) {
      setQuantityIsValid(false);
      return; //returns from the submitHandler function
    }
    onAddToCart(+quantity);
  };
  const inputChangeHandler = (event) => {
    setQuantity(event.target.value);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.input}>
        <label htmlFor={id}>Quantity</label>
        <input
          type="number"
          id={id}
          value={quantity}
          max="5"
          min="1"
          step="1"
          onChange={inputChangeHandler}
        ></input>
      </div>
      {/* <Input
        label="Quantity"
        input={{
          id: "amount_" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input> */}
      <button>+ Add</button>
      {!quantityIsValid && <p>Please enter a valid quantity (1-5)</p>}
    </form>
  );
};
export default MealItemForm;
