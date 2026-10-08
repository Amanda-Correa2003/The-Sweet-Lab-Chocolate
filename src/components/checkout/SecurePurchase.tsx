import { ShieldCheck, Heart } from "lucide-react";

export default function SecurePurchase() {
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        gap: "14px",
        backgroundColor: "#F8EDE0",
        border: "1px solid #E8DCC8",
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "#EAD9C3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <ShieldCheck size={20} color="#591F24" strokeWidth={2} />
      </div>

      <div style={{ flex: 1, textAlign: "center" }}>
        <div style={{ fontWeight: "bold", fontSize: "14px", color: "#2B1215" }}>
          Compra 100% segura
        </div>
        <div style={{ fontSize: "11px", color: "#6B4A4E", marginTop: "4px" }}>
          Seus dados estão protegidos e seu pedido será enviado com todo carinho.
        </div>
      </div>

      <Heart size={18} color="#D98088" fill="#D98088" />
    </div>
  );
}