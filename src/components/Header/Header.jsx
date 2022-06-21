import CartButton from "./CartButton";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Redux Cart</h1>
      <CartButton />
    </header>
  );
};

export default Header;
