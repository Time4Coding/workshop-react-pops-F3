import ProductCard from "./ProductCard";
import products from "../../products.json";

export default function ProductList({ children }) {
  return (
    <>
      <h3>ProductList</h3>
      <div style={{ display: "flex", gap: "20px" }}>
        {products.length === 0 ? (
          <p>There is no products in the database ...</p>
        ) : (
          products.map((product, index) => (
            <ProductCard product={product} name="bahe" key={product.id} />
          ))
        )}
      </div>
      {children}
    </>
  );
}
