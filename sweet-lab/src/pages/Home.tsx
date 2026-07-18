import { useState } from "react";
import { products } from "../data/Products";
import { useCart } from "../CartContext";
import Footer from "../components/Footer";








interface HomeProps {
  onIrParaCheckout: () => void;
}

export default function Home({ onIrParaCheckout }: HomeProps) {
const [search, setSearch] = useState("");
const [category, setCategory] = useState("Todos");
const [sortBy, setSortBy] = useState("default");
const [mostrarTodos, setMostrarTodos] = useState(false);


const isMobile = window.innerWidth <= 768;
const { addToCart } = useCart();

let filteredProducts = [...products];

if (search) {
  filteredProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
}

if (category !== "Todos") {
  filteredProducts = filteredProducts.filter(
    (product) => product.category === category
  );
}

switch (sortBy) {
  case "menor-preco":
    filteredProducts.sort((a, b) => a.price - b.price);
    break;

  case "maior-preco":
    filteredProducts.sort((a, b) => b.price - a.price);
    break;

  case "mais-vendidos":
    filteredProducts.sort((a, b) => b.sales - a.sales);
    break;

  case "a-z":
    filteredProducts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    break;
}

const produtosExibidos = mostrarTodos
  ? filteredProducts
  : filteredProducts.slice(0, 9);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#9E2B3C",
        padding: "40px"
      }}
    >

<div style={{ textAlign: "right", marginBottom: "20px" }}>
  <button
    onClick={onIrParaCheckout}
    style={{
      padding: "10px 20px",
      backgroundColor: "#3D2B1F",
      color: "#B08D57",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold"
    }}
  >
    Ver Carrinho 🛒
  </button>
</div>
 

      <h1 className= "titulo da loja">
        <p
        style={{
          textAlign: "center",
          color: "#3D2B1F",
          marginBottom: "40px",
          fontSize: isMobile ? "3rem" : "clamp(2.2rem, 8vw, 3.8rem)",
fontWeight: "900",
lineHeight: "1.1",
        }}
      >
     <>
  The Sweet Lab
  {isMobile && <br />}
  Chocolate
</>
      </p>
        
        </h1>
      <p
        style={{
          textAlign: "center",
          color: "#3D2B1F",
          marginBottom: "40px"
        }}
      >
      <p
  style={{
    textAlign: "center",
    color: "#2E1A12",
    fontWeight: "600",
    fontSize: "18px",
    marginBottom: "40px",
  }}
>
  Sabores artesanais para momentos especiais.
</p>
      </p>


      <div
  style={{
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "30px"
  }}
>

  <input
    type="text"
    placeholder="Pesquisar produto..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
   style={{
  padding: "10px",
  borderRadius: "8px",
  border: "2px solid #B08D57",
  backgroundColor: "#3E2723",
  color: "#B08D57"
}}
  />

  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    style={{
      border: "2px solid #B08D57",
  backgroundColor: "#3E2723",
  color: "#B08D57",
      padding: "10px",
      borderRadius: "8px"
    }}
  >
    <option>Todos</option>
    <option>Chocolate</option>
    <option>Biscoito</option>
    <option>Kit</option>
    <option>Doce</option>
  </select>

  <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
    style={{
      border: "2px solid #B08D57",
  backgroundColor: "#3E2723",
  color: "#B08D57",
      padding: "10px",
      borderRadius: "8px"
    }}
  >
    <option value="default">Ordenar</option>

    <option value="menor-preco">
      Menor preço
    </option>

    <option value="maior-preco">
      Maior preço
    </option>

    <option value="mais-vendidos">
      Mais vendidos
    </option>

    <option value="a-z">
      A-Z
    </option>
  </select>

</div>


     <div
  style={{
    display: "grid",
    gridTemplateColumns: isMobile
  ? "repeat(2, 1fr)"
  : "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "15px"
  }}
>
        {produtosExibidos.map((product) => (
          <div
            key={product.id}
            style={{
              background: "beige",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: isMobile ? "120px" : "220px",
                objectFit: "cover"
              }}
            />

            <div
  style={{
    padding: isMobile ? "10px" : "20px",
  }}
>
              <h3
  style={{
    color: "#4E342E",
    fontWeight: "700"
  }}
>
  {product.name}
</h3>

              <p>{product.ingredients}</p>

              <h2 style={{ color: "#3D2B1F" }}>
                R$ {product.price}
              </h2>

              <button
              onClick={() => addToCart(product)}
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#3D2B1F",
                  color: "beige",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer"
                }}
              >
                Colocar no Carrinho
              </button>
            </div>
          </div>
        ))}
      </div>

      {!mostrarTodos && filteredProducts.length > 9 && (
  <div style={{ textAlign: "center", marginTop: "30px" }}>
    <button
      onClick={() => setMostrarTodos(true)}
      style={{
        backgroundColor: "#3D2B1F",
        color: "#B08D57",
        border: "none",
        padding: isMobile ? "8px 18px" : "12px 25px",
        borderRadius: "10px",
        cursor: "pointer",
        fontSize: isMobile ? "14px" : "16px",
        lineHeight: "1.1",
        fontWeight: "bold",
      }}
    >
      Ver mais ▼
    </button>
  </div>
)}

      <Footer/>
    </div>
  );
}
    