import { useState, useMemo, useEffect } from "react";
import { products } from "../data/Products";
import { useCart } from "../CartContext";
import Footer from "../components/Footer";
import HomeHero from "../components/HomeHero";
import ProductFilters from "../components/ProductFilters";
import ProductGrid from "../components/ProductGrid";
import ShowMoreButton from "../components/ShowMoreButton";

interface HomeProps {
  onIrParaCheckout: () => void;
}

export default function Home({ onIrParaCheckout }: HomeProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");
  const [sortBy, setSortBy] = useState("default");
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const { addToCart } = useCart();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (search) {
      list = list.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (category !== "Todos") {
      list = list.filter((p) => p.category === category);
    }
    
    switch (sortBy) {
      case "menor-preco": list.sort((a, b) => a.price - b.price); break;
      case "maior-preco": list.sort((a, b) => b.price - a.price); break;
      case "mais-vendidos": list.sort((a, b) => b.sales - a.sales); break;
      case "a-z": list.sort((a, b) => a.name.localeCompare(b.name)); break;
    }
    return list;
  }, [search, category, sortBy]);

  const produtosExibidos = mostrarTodos ? filteredProducts : filteredProducts.slice(0, 9);

  return (
    <div
      style={{
        minHeight: "120vh",
        backgroundColor: "#591F24",
        padding: isMobile ? "20px 20px 40px 10px" : "20px 40px 40px 40px",
        fontFamily: "sans-serif",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: isMobile ? "100%" : "880px",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <HomeHero onIrParaCheckout={onIrParaCheckout} isMobile={isMobile} />
        <ProductFilters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <ProductGrid
          products={produtosExibidos}
          onAddToCart={addToCart}
          isMobile={isMobile}
        />
        
        {!mostrarTodos && filteredProducts.length > 9 && (
          <ShowMoreButton onClick={() => setMostrarTodos(true)} isMobile={isMobile} />
        )}

        <div style={{ marginTop: "50px", width: "100%" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}