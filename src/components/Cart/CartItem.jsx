import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart/cart_slice";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const { name, totalPrice, quantity, price } = props.item;
  const quantityText = "x " + quantity;
  const priceText = "$" + price.toFixed(2) + "/1";
  const totalPriceText = "$" + totalPrice.toFixed(2);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addItem(props.item));
  };

  const removeFromCartHandler = () => {
    dispatch(cartActions.removeItem(props.item));
  };

  return (
    <li className={styles["cart-item"]}>
      <div className={styles.left}>
        <p>{name}</p>
        <p>{quantityText}</p>
      </div>
      <div className={styles.right}>
        <div className={styles.actions}>
          <button onClick={removeFromCartHandler}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
        <div className={styles.price}>
          <p>{priceText}</p>
          <p>{totalPriceText}</p>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
