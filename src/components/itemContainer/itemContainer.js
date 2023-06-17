import ProductCard from "components/productCard/productCard";
export default function ItemsContainer({ items }) {
  return (
    <div className="product-display">
      {items && items.map((item) => {
        return <ProductCard product={item} />;
      })}
    </div>
  );
}
