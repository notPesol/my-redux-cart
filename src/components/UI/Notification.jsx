import React from "react";
import styles from "./Notification.module.css";

const Notification = (props) => {
  let extraClass = "";
  if (props.status === "success") {
    extraClass = styles.success;
  } else if (props.status === "error") {
    extraClass = styles.error;
  }

  return (
    <div
      className={`${styles.notification} ${extraClass}`}
      onClick={props.onClick}
    >
      <p>{props.title}</p>
      <p>{props.message}</p>
    </div>
  );
};

export default Notification;
