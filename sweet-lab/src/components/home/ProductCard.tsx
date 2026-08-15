import { products } from "../../data/Products";

type Product = typeof products[number];

interface CardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  isMobile: boolean;
}

export default function ProductCard({ product, onAddToCart, isMobile }: CardProps) {
  return (
    <div
      style={{
        backgroundColor: "#F4EBD9",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #E2D4BC",
      }}
    >
      <div style={{ width: "100%", height: isMobile ? "120px" : "200px", overflow: "hidden" }}>
        <img src={product.image} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ padding: "16px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", flex: "1", justifyContent: "space-between" }}>
        <div>
          <h3 style={{ color: "#3D2B1F", fontWeight: "700", fontSize: "16px", margin: "0 0 6px 0", fontFamily: "serif" }}>
            {product.name}
          </h3>
          <p style={{ color: "#6E5B50", fontSize: "12px", margin: "0 0 12px 0", lineHeight: "1.3" }}>
            {product.ingredients}
          </p>
        </div>
        <div style={{ width: "100%" }}>
          <h2 style={{ color: "#3D2B1F", fontSize: "18px", fontWeight: "800", margin: "0 0 12px 0" }}>
            R$ {product.price}
          </h2>
          <button
            onClick={() => onAddToCart(product)}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#3D2B1F",
              color: "#F4EBD9",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "13px",
              transition: "background 0.2s",
            }}
          >
            Colocar no Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}