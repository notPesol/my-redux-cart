import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui/ui_slice";

import styles from "./CartButton.module.css";

const CartButton = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(uiActions.toggleShowCart());
  };

  return (
    <button className={styles["cart-button"]} onClick={onClickHandler}>
      <p>
        My Cart <span>{totalQuantity}</span>
      </p>
    </button>
  );
};

export default CartButton;
