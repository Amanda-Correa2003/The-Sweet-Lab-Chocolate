import React, { useState } from "react";
import { useCart } from "../CartContext";
import CheckoutHeader from "../components/checkout/CheckoutHeader";
import CheckoutForm from "../components/checkout/CheckoutForm";
import SecurePurchase from "../components/checkout/SecurePurchase";
import CheckoutBenefits from "../components/checkout/CheckoutBenefits";

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

export default function Checkout({ onBack }: CheckoutProps) {
  const { cart, cartTotal, clearCart } = useCart();
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
    let itensTexto = "";
    cart.forEach((item) => {
      itensTexto += `• *${item.quantity}x* ${item.name}\n`;
    });

    const mensagem = encodeURIComponent(
      `🍫 *NOVO PEDIDO*\n\n${itensTexto}\n*Total:* R$ ${cartTotal.toFixed(2)}`
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
          <CheckoutForm
            formData={formData}
            handleChange={handleChange}
            onSubmit={handleFinalizarPedido}
          />
          <SecurePurchase />
        </div>

        <CheckoutBenefits />
      </div>
    </div>
  );
}