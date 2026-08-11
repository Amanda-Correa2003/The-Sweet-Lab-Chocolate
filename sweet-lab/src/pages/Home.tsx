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
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }

  const produtosExibidos = mostrarTodos
    ? filteredProducts
    : filteredProducts.slice(0, 9);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#591F24",
        padding: "20px 40px 40px 40px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Banner / Hero Principal */}
      <div
        style={{
          backgroundColor: "#F4EBD9",
          borderRadius: "12px",
          padding: "30px 40px",
          position: "relative",
          marginBottom: "30px",
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "180px",
        }}
      >
        {/* Botão Carrinho no Canto Superior Direito do Banner */}
        <div style={{ position: "absolute", top: "20px", right: "20px", zIndex: 2 }}>
          <button
            onClick={onIrParaCheckout}
            style={{
              padding: "8px 18px",
              backgroundColor: "#FFF8EE",
              color: "#3D2B1F",
              border: "1px solid #D4B595",
              borderRadius: "20px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "14px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
              display: "flex",
               
              gap: "6px"
            }}
          >
            Ver Carrinho 🛒
          </button>
        </div>

        {/* Logo / Marca Superior Esquerda */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
          <div
            style={{
              width: "38px",
              height: "38px",
              backgroundColor: "#3D2B1F",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#F4EBD9",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            🍫
          </div>
          <div style={{ lineHeight: "1.1" }}>
            <span style={{ fontSize: "12px", color: "#3D2B1F", display: "block", fontWeight: "500" }}>
              O Chocolate
            </span>
            <span style={{ fontSize: "15px", color: "#3D2B1F", fontWeight: "bold", fontFamily: "serif" }}>
              Sweet Lab
            </span>
          </div>
        </div>

        {/* Título e Subtítulo do Banner */}
        <div style={{ maxWidth: "600px", zIndex: 1 }}>
          <h1
            style={{
              color: "#3D2B1F",
              margin: "0 0 8px 0",
              fontSize: isMobile ? "2.2rem" : "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: "800",
              fontFamily: "serif",
              letterSpacing: "-0.5px"
            }}
          >
            O Chocolate Sweet <span style={{ fontWeight: "400", fontStyle: "italic" }}>Lab.</span>
          </h1>
          <p
            style={{
              color: "#5A4A42",
              margin: "0 0 12px 0",
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            Sabores artesanais para momentos especiais.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ height: "1px", width: "100px", backgroundColor: "#D4B595" }}></div>
            <span style={{ fontSize: "12px" }}>❤️</span>
            <div style={{ height: "1px", width: "100px", backgroundColor: "#D4B595" }}></div>
          </div>
        </div>
      </div>

      {/* Área de Pesquisa e Filtros */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        <input
          type="text"
          placeholder="Pesquisar produto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            flex: "1",
            minWidth: "220px",
            padding: "10px 14px",
            borderRadius: "8px",
            border: "1px solid #7D3E45",
            backgroundColor: "#42151B",
            color: "#E6C5A8",
            outline: "none",
            fontSize: "14px",
          }}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            border: "1px solid #7D3E45",
            backgroundColor: "#42151B",
            color: "#E6C5A8",
            padding: "10px 14px",
            borderRadius: "8px",
            outline: "none",
            fontSize: "14px",
            cursor: "pointer",
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
            border: "1px solid #7D3E45",
            backgroundColor: "#42151B",
            color: "#E6C5A8",
            padding: "10px 14px",
            borderRadius: "8px",
            outline: "none",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          <option value="default">Ordenar</option>
          <option value="menor-preco">Menor preço</option>
          <option value="maior-preco">Maior preço</option>
          <option value="mais-vendidos">Mais vendidos</option>
          <option value="a-z">A-Z</option>
        </select>
      </div>

      {/* Grid de Produtos */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "repeat(2, 1fr)"
            : "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {produtosExibidos.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "#F4EBD9",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              display: "flex",
              flexDirection: "column",
              border: "1px solid #E2D4BC"
            }}
          >
            <div style={{ width: "100%", height: isMobile ? "120px" : "200px", overflow: "hidden" }}>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div
              style={{
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                flex: "1",
                justifyContent: "space-between"
              }}
            >
              <div>
                <h3
                  style={{
                    color: "#3D2B1F",
                    fontWeight: "700",
                    fontSize: "16px",
                    margin: "0 0 6px 0",
                    fontFamily: "serif",
                  }}
                >
                  {product.name}
                </h3>

                <p
                  style={{
                    color: "#6E5B50",
                    fontSize: "12px",
                    margin: "0 0 12px 0",
                    lineHeight: "1.3",
                  }}
                >
                  {product.ingredients}
                </p>
              </div>

              <div style={{ width: "100%" }}>
                <h2
                  style={{
                    color: "#3D2B1F",
                    fontSize: "18px",
                    fontWeight: "800",
                    margin: "0 0 12px 0",
                  }}
                >
                  R$ {product.price}
                </h2>

                <button
                  onClick={() => addToCart(product)}
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
        ))}
      </div>

      {/* Botão Ver Mais */}
      {!mostrarTodos && filteredProducts.length > 9 && (
        <div style={{ textAlign: "center", marginTop: "35px" }}>
          <button
            onClick={() => setMostrarTodos(true)}
            style={{
              backgroundColor: "#3D2B1F",
              color: "#D4B595",
              border: "1px solid #7D3E45",
              padding: isMobile ? "8px 20px" : "10px 24px",
              borderRadius: "20px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "600",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            Ver mais produtos ▼
          </button>
        </div>
      )}

      {/* Rodapé Existente */}
      <div style={{ marginTop: "50px" }}>
        <Footer />
      </div>
    </div>
  );
}
    