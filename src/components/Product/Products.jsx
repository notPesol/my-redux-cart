import Card from "../UI/Card";
import Product from "./Product";
import DUMMY_PRODUCTS from "./DUMMY_PRODUCTS";

import styles from "./Products.module.css";
const Products = (props) => {
  return (
    <Card class={styles.products}>
      <h2>Available Products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </ul>
    </Card>
  );
};

export default Products;
