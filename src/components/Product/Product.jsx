import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart/cart_slice";

import styles from "./Product.module.css";

const Product = (props) => {
  const { product } = props;
  const productPrice = "$" + product.price.toFixed(2);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addItem(product));
  };
  return (
    <li className={styles.product}>
      <div>
        <h3>{product.name}</h3>
        <p>{productPrice}</p>
      </div>
      <button className={styles.button} onClick={addToCartHandler}>Add to Cart</button>
    </li>
  );
};

export default Product;
