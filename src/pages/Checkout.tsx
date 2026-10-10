import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import { useCart } from "../CartContext";
import CheckoutHeader from "../components/checkout/CheckoutHeader";
import CheckoutForm from "../components/checkout/CheckoutForm";
import SecurePurchase from "../components/checkout/SecurePurchase";
import CheckoutBenefits from "../components/checkout/CheckoutBenefits";
import Footer from "../components/home/Footer";

interface CheckoutProps {
  onBack: () => void;
}

interface FormData {
  nome: string;
  cep: string;
  cidade: string;
  rua: string;
  numero: string;
  complemento: string;
}

const formatBRL = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function RemoveButton({ onClick, label }: { onClick: () => void; label: string }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={label}
      title="Remover do carrinho"
      style={{
        width: "34px",
        height: "34px",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        border: "1px solid #591F24",
        backgroundColor: hover ? "#591F24" : "transparent",
        color: hover ? "#F4EBD9" : "#591F24",
        cursor: "pointer",
        transition: "background-color 0.2s, color 0.2s, transform 0.1s",
        transform: hover ? "scale(1.05)" : "scale(1)",
      }}
    >
      <Trash2 size={16} strokeWidth={2} />
    </button>
  );
}

export default function Checkout({ onBack }: CheckoutProps) {
  const { cart, cartTotal, clearCart, removeFromCart } = useCart();
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    cep: "",
    cidade: "",
    rua: "",
    numero: "",
    complemento: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFinalizarPedido = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }

    const numeroWhats = "5521964239143";

    const itensTexto = cart
      .map(
        (item) =>
          `• *${item.quantity}x* ${item.name} - ${formatBRL(item.price * item.quantity)}`
      )
      .join("\n");

    const clienteTexto = [
      `Nome: ${formData.nome}`,
      formData.cep && `CEP: ${formData.cep}`,
      `Cidade: ${formData.cidade}`,
      `Rua: ${formData.rua}`,
      `Número: ${formData.numero}`,
      formData.complemento && `Complemento: ${formData.complemento}`,
    ]
      .filter(Boolean)
      .join("\n");

    const mensagem = encodeURIComponent(
      `🍫 *NOVO PEDIDO*\n\n*Pedido:*\n${itensTexto}\n\n*Cliente:*\n${clienteTexto}\n\n*Total:* ${formatBRL(cartTotal)}`
    );

    window.open(`https://wa.me/${numeroWhats}?text=${mensagem}`, "_blank");
    clearCart();
    onBack();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#591F24",
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "#591F24",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          overflow: "hidden",
          border: "1px solid #7D3E45",
        }}
      >
        <CheckoutHeader onBack={onBack} />

        <div
          style={{
            backgroundColor: "#F4EBD9",
            borderRadius: "20px 20px 0 0",
            padding: "30px",
            boxShadow: "0 -4px 20px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ marginBottom: "24px" }}>
            <h3 style={{ color: "#591F24", margin: "0 0 12px 0" }}>
              Resumo do pedido
            </h3>

            {cart.length === 0 ? (
              <p style={{ color: "#591F24", margin: 0 }}>Seu carrinho está vazio.</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 0",
                    borderBottom: "1px solid #7D3E45",
                    color: "#591F24",
                  }}
                >
                  <div style={{ flex: 1, textAlign: "left" }}>
                    <div style={{ fontWeight: "bold" }}>{item.name}</div>
                    <div style={{ fontSize: "14px" }}>
                      {item.quantity}x {formatBRL(item.price)}
                    </div>
                  </div>
                  <div style={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
                    {formatBRL(item.price * item.quantity)}
                  </div>
                  <RemoveButton
                    onClick={() => removeFromCart(item.id)}
                    label={`Remover ${item.name} do carrinho`}
                  />
                </div>
              ))
            )}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "12px",
                color: "#591F24",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              <span>Total</span>
              <span>{formatBRL(cartTotal)}</span>
            </div>
          </div>

          <CheckoutForm
            formData={formData}
            handleChange={handleChange}
            onSubmit={handleFinalizarPedido}
          />
          <SecurePurchase />
        </div>

        <CheckoutBenefits />
      </div>

      <div style={{ marginTop: "50px", width: "100%", maxWidth: "880px" }}>
        <Footer />
      </div>
    </div>
  );
}