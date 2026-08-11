import React, { useState } from "react";
import { useCart } from "../CartContext";

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
      {/* Container Principal */}
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
        {/* Cabeçalho */}
        <div
          style={{
            padding: "30px 30px 20px 30px",
            position: "relative",
            color: "#F4EBD9",
          }}
        >
          {/* Botão Voltar */}
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

          {/* Título e Decoração */}
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

        {/* Área Branca/Creme do Formulário */}
        <div
          style={{
            backgroundColor: "#F4EBD9",
            borderRadius: "20px 20px 0 0",
            padding: "30px",
            boxShadow: "0 -4px 20px rgba(0,0,0,0.1)",
          }}
        >
          <form
            onSubmit={handleFinalizarPedido}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            {/* Campo Nome */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#FFF8EE",
                border: "1px solid #E2D4BC",
                borderRadius: "10px",
                padding: "0 15px",
              }}
            >
              <span style={{ fontSize: "16px", marginRight: "10px" }}>👤</span>
              <input
                required
                type="text"
                name="nome"
                placeholder="Seu Nome"
                value={formData.nome}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "14px 0",
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#3D2B1F",
                  fontSize: "14px",
                }}
              />
            </div>

            {/* Campo CEP */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#FFF8EE",
                border: "1px solid #E2D4BC",
                borderRadius: "10px",
                padding: "0 15px",
              }}
            >
              <span style={{ fontSize: "16px", marginRight: "10px" }}>📍</span>
              <input
                required
                type="text"
                name="cep"
                placeholder="CEP"
                value={formData.cep}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "14px 0",
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#3D2B1F",
                  fontSize: "14px",
                }}
              />
            </div>

            {/* Campo Cidade */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#FFF8EE",
                border: "1px solid #E2D4BC",
                borderRadius: "10px",
                padding: "0 15px",
              }}
            >
              <span style={{ fontSize: "16px", marginRight: "10px" }}>🏢</span>
              <input
                required
                type="text"
                name="cidade"
                placeholder="Cidade"
                value={formData.cidade}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "14px 0",
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#3D2B1F",
                  fontSize: "14px",
                }}
              />
            </div>

            {/* Campo Rua */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#FFF8EE",
                border: "1px solid #E2D4BC",
                borderRadius: "10px",
                padding: "0 15px",
              }}
            >
              <span style={{ fontSize: "16px", marginRight: "10px" }}>🗺</span>
              <input
                required
                type="text"
                name="rua"
                placeholder="Rua"
                value={formData.rua}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "14px 0",
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#3D2B1F",
                  fontSize: "14px",
                }}
              />
            </div>

            {/* Campo Número */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#FFF8EE",
                border: "1px solid #E2D4BC",
                borderRadius: "10px",
                padding: "0 15px",
              }}
            >
              <span style={{ fontSize: "16px", marginRight: "10px" }}>#</span>
              <input
                required
                type="text"
                name="numero"
                placeholder="Número"
                value={formData.numero}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "14px 0",
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#3D2B1F",
                  fontSize: "14px",
                }}
              />
            </div>

            {/* Campo Complemento */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#FFF8EE",
                border: "1px solid #E2D4BC",
                borderRadius: "10px",
                padding: "0 15px",
              }}
            >
              <span style={{ fontSize: "16px", marginRight: "10px" }}>💬</span>
              <input
                type="text"
                name="complemento"
                placeholder="Complemento (Opcional)"
                value={formData.complemento}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "14px 0",
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#3D2B1F",
                  fontSize: "14px",
                }}
              />
            </div>

            {/* Botão Enviar */}
            <button
              type="submit"
              style={{
                backgroundColor: "#42151B",
                color: "#F4EBD9",
                fontWeight: "600",
                padding: "15px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                marginTop: "10px",
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                transition: "background 0.2s",
              }}
            >
              Enviar Pedido via WhatsApp 🚀
            </button>
          </form>

          {/* Bloco de Compra Segura */}
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
        </div>

        {/* Rodapé de Benefícios do Checkout */}
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
      </div>
    </div>
  );
}