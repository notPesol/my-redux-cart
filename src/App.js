import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData, sendCartData } from "./store/cart/cart_actions";

import Notification from "./components/UI/Notification";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
import Products from "./components/Product/Products";
import { uiActions } from "./store/ui/ui_slice";

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const showCart = useSelector((state) => state.ui.showCart);
  const notification = useSelector((state) => state.ui.notification);

  const hideNotificationHandler = useCallback(() => {
    dispatch(uiActions.hideNotification());
  }, [dispatch]);

  useEffect(() => {
    console.log('in first effect');
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (!cart.canSend) {
      return;
    }

    dispatch(
      sendCartData({
        items: cart.items,
        totalPrice: cart.totalPrice,
        totalQuantity: cart.totalQuantity,
      })
    );
  }, [dispatch, cart]);

  return (
    <React.Fragment>
      {notification && (
        <Notification
          onClick={hideNotificationHandler}
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Header />
      <Main>
        {showCart && <Cart />}
        <Products />
      </Main>
    </React.Fragment>
  );
}

export default App;
