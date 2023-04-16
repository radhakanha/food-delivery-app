import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Kadhi Chawal",
    description: "Kadhi Pakoda, Rice and Salad",
    price: 15.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.99,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return <MealItem key={meal.id} mealData={meal}></MealItem>;
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
