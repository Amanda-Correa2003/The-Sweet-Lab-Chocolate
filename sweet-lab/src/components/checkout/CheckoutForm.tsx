import React from "react";
import CheckoutInput from "./CheckoutInput";

interface FormData {
  nome: string;
  cep: string;
  cidade: string;
  rua: string;
  numero: string;
  complemento: string;
}

interface CheckoutFormProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function CheckoutForm({
  formData,
  handleChange,
  onSubmit,
}: CheckoutFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "15px" }}
    >
      <CheckoutInput
        icon="👤"
        name="nome"
        placeholder="Seu Nome"
        value={formData.nome}
        onChange={handleChange}
        required
      />

      <CheckoutInput
        icon="📍"
        name="cep"
        placeholder="CEP"
        value={formData.cep}
        onChange={handleChange}
        required
      />

      <CheckoutInput
        icon="🏢"
        name="cidade"
        placeholder="Cidade"
        value={formData.cidade}
        onChange={handleChange}
        required
      />

      <CheckoutInput
        icon="🗺"
        name="rua"
        placeholder="Rua"
        value={formData.rua}
        onChange={handleChange}
        required
      />

      <CheckoutInput
        icon="#"
        name="numero"
        placeholder="Número"
        value={formData.numero}
        onChange={handleChange}
        required
      />

      <CheckoutInput
        icon="💬"
        name="complemento"
        placeholder="Complemento (Opcional)"
        value={formData.complemento}
        onChange={handleChange}
      />

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
  );
}