import { Sparkles, Truck, Heart } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Qualidade Artesanal",
    text: "Ingredientes selecionados com todo cuidado.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    text: "Seu pedido chega fresquinho até você.",
  },
  {
    icon: Heart,
    title: "Feito com Amor",
    text: "Cada detalhe pensado para encantar.",
  },
];

export default function CheckoutBenefits() {
  return (
    <div
      style={{
        backgroundColor: "#4A1219",
        padding: "28px 20px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
        textAlign: "center",
      }}
    >
      {benefits.map(({ icon: Icon, title, text }) => (
        <div key={title}>
          <Icon size={22} color="#E0A96D" strokeWidth={2} />
          <div
            style={{
              color: "#FFFFFF",
              fontWeight: "bold",
              fontSize: "12px",
              marginTop: "10px",
            }}
          >
            {title}
          </div>
          <div style={{ color: "#E0A96D", fontSize: "10px", marginTop: "6px" }}>
            {text}
          </div>
        </div>
      ))}
    </div>
  );
}