import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart/cart_slice";

import Card from "../UI/Card";

import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart);
  const cartTotalPrice = "$" + cart.totalPrice.toFixed(2);

  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(cartActions.clearCart());
  };
  return (
    <Card class={styles.cart}>
      <h2>Cart Items</h2>
      <ul>
        {cart.items.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </ul>
      <div className={styles.total}>
        <h3>Total Price: </h3>
        <p>{cartTotalPrice}</p>
      </div>
      <button className={styles.clear} onClick={clearCartHandler}>Clear Cart</button>
    </Card>
  );
};

export default Cart;
