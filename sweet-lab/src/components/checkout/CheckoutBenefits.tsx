export default function CheckoutBenefits() {
  return (
    <div
      style={{
        backgroundColor: "#42151B",
        padding: "25px 20px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
        textAlign: "center",
        borderTop: "1px solid #7D3E45",
      }}
    >
      <div>
        <div style={{ fontSize: "18px", marginBottom: "6px" }}>✨</div>
        <p style={{ color: "#F4EBD9", fontWeight: "bold", fontSize: "11px", margin: "0 0 4px 0" }}>
          Qualidade Artesanal
        </p>
        <p style={{ color: "#D4B595", fontSize: "9px", margin: "0", lineHeight: "1.2" }}>
          Ingredientes selecionados com todo cuidado.
        </p>
      </div>

      <div>
        <div style={{ fontSize: "18px", marginBottom: "6px" }}>🚚</div>
        <p style={{ color: "#F4EBD9", fontWeight: "bold", fontSize: "11px", margin: "0 0 4px 0" }}>
          Entrega Rápida
        </p>
        <p style={{ color: "#D4B595", fontSize: "9px", margin: "0", lineHeight: "1.2" }}>
          Seu pedido chega fresquinho até você.
        </p>
      </div>

      <div>
        <div style={{ fontSize: "18px", marginBottom: "6px" }}>💖</div>
        <p style={{ color: "#F4EBD9", fontWeight: "bold", fontSize: "11px", margin: "0 0 4px 0" }}>
          Feito com Amor
        </p>
        <p style={{ color: "#D4B595", fontSize: "9px", margin: "0", lineHeight: "1.2" }}>
          Cada detalhe pensado para encantar.
        </p>
      </div>
    </div>
  );
}