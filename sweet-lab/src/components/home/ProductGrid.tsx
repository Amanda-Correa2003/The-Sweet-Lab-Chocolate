
import ProductCard from "./ProductCard";
import { products } from "../../data/Products";

type Product = typeof products[number];



interface GridProps {
  products: Product[];
  onAddToCart: (p: Product) => void;
  isMobile: boolean;
}

export default function ProductGrid({ products, onAddToCart, isMobile }: GridProps) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(3, 1fr)", gap: "20px" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} isMobile={isMobile} />
      ))}
    </div>
  );
}