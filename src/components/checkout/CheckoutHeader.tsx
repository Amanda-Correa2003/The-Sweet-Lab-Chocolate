interface CheckoutHeaderProps {
  onBack: () => void;
}

export default function CheckoutHeader({ onBack }: CheckoutHeaderProps) {
  return (
    <div
      style={{
        padding: "30px 30px 20px 30px",
        position: "relative",
        color: "#F4EBD9",
      }}
    >
      <button
        onClick={onBack}
        style={{
          color: "#F4EBD9",
          fontWeight: "600",
          background: "none",
          border: "none",
          cursor: "pointer",
          marginBottom: "20px",
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "0",
        }}
      >
        ← Voltar para a Vitrine
      </button>

      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <h2
          style={{
            color: "#F4EBD9",
            fontSize: "2rem",
            fontFamily: "serif",
            fontWeight: "700",
            margin: "0 0 10px 0",
          }}
        >
          Finalizar Pedido
        </h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            color: "#D4B595",
            fontSize: "12px",
          }}
        >
          <div style={{ height: "1px", width: "60px", backgroundColor: "#D4B595" }}></div>
          <span>♥</span>
          <div style={{ height: "1px", width: "60px", backgroundColor: "#D4B595" }}></div>
        </div>
      </div>
    </div>
  );
}