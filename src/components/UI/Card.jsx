import styles from "./Card.module.css";

const Card = (props) => {
  const extraClass = props.class ? props.class : "";
  return (
    <section className={`${styles.card} ${extraClass}`}>
      {props.children}
    </section>
  );
};

export default Card;
