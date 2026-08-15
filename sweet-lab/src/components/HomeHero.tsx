interface HomeHeroProps {
  onIrParaCheckout: () => void;
  isMobile: boolean;
}

export default function HomeHero({ onIrParaCheckout, isMobile }: HomeHeroProps) {
  return (
    <div
      style={{
        backgroundColor: "#F4EBD9",
        borderRadius: "12px",
        padding: isMobile ? "30px 20px" : "35px 50px",
        position: "relative",
        marginBottom: "30px",
        overflow: "hidden",
        boxShadow: "0 8px 24px rgb(168, 35, 35)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "180px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div style={{ position: "absolute", top: "20px", right: "20px", zIndex: 2 }}>
        <button
          onClick={onIrParaCheckout}
          style={{
            padding: "8px 16px",
            backgroundColor: "#FFF8EE",
            color: "#3D2B1F",
            border: "1px solid #D4B595",
            borderRadius: "20px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            display: "flex",
            gap: "6px",
          }}
        >
          Ver Carrinho 🛒
        </button>
      </div>

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

      <div style={{ maxWidth: "600px", zIndex: 1 }}>
        <h1
          style={{
            color: "#3D2B1F",
            margin: "0 0 8px 0",
            fontSize: isMobile ? "2.2rem" : "clamp(2rem, 4vw, 2.8rem)",
            fontWeight: "800",
            fontFamily: "serif",
            letterSpacing: "-0.5px",
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
  );
}