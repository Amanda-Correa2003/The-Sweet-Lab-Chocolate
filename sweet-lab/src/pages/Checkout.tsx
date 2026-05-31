import React, { useState } from "react";
import { useCart } from "../CartContext"; // Pega o carrinho do lugar certo agora!

interface CheckoutProps {
  onBack: () => void;
}

export default function Checkout({ onBack }: CheckoutProps) {
  const { cart, cartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
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

    const numeroWhats = "5521999999999"; // Depois você altera para o seu número real
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
    <div className="p-6 bg-white rounded-xl max-w-lg mx-auto mt-10 shadow-md" style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "12px" }}>
      <button onClick={onBack} style={{ color: "#3D2B1F", fontWeight: "bold", background: "none", border: "none", cursor: "pointer", marginBottom: "15px" }}>
        ← Voltar para a Vitrine
      </button>
      <h2 style={{ color: "#3D2B1F", marginBottom: "15px" }}>Finalizar Pedido</h2>
      
      <form onSubmit={handleFinalizarPedido} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input required type="text" name="nome" placeholder="Seu Nome" value={formData.nome} onChange={handleChange} style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }} />
        <input required type="text" name="cep" placeholder="CEP" value={formData.cep} onChange={handleChange} style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }} />
        <input required type="text" name="cidade" placeholder="Cidade" value={formData.cidade} onChange={handleChange} style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }} />
        <input required type="text" name="rua" placeholder="Rua" value={formData.rua} onChange={handleChange} style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }} />
        <input required type="text" name="numero" placeholder="Número" value={formData.numero} onChange={handleChange} style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }} />
        <input type="text" name="complemento" placeholder="Complemento (Opcional)" value={formData.complemento} onChange={handleChange} style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }} />
        
        <button type="submit" style={{ backgroundColor: "#3D2B1F", color: "beige", fontWeight: "bold", padding: "12px", border: "none", borderRadius: "8px", cursor: "pointer", marginTop: "10px" }}>
          Enviar Pedido via WhatsApp 🚀
        </button>
      </form>
    </div>
  );
}