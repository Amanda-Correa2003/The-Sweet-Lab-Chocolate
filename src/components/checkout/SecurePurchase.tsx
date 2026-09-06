export default function SecurePurchase() {
  return (
    <div
      style={{
        marginTop: "20px",
        backgroundColor: "#F9EFE3",
        border: "1px solid #EAD8C3",
        borderRadius: "10px",
        padding: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            width: "36px",
            height: "36px",
            backgroundColor: "#EBD8C3",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
          }}
        >
          🛡️
        </div>
        <div>
          <p
            style={{
              margin: "0 0 2px 0",
              fontWeight: "bold",
              color: "#3D2B1F",
              fontSize: "13px",
            }}
          >
            Compra 100% segura
          </p>
          <p
            style={{
              margin: "0",
              color: "#7A6558",
              fontSize: "11px",
            }}
          >
            Seus dados estão protegidos e seu pedido será enviado com todo carinho.
          </p>
        </div>
      </div>
      <div style={{ color: "#E08383", fontSize: "20px" }}>♥</div>
    </div>
  );
}