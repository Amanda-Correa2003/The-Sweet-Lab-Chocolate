import React from "react";
import { User, MapPin, Building2, Map, Hash, MessageSquare, Send } from "lucide-react";

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

const fieldStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  backgroundColor: "#FFF8EE",
  border: "1px solid #E8DCC8",
  borderRadius: "12px",
  padding: "0 14px",
  height: "44px",
};

const inputStyle: React.CSSProperties = {
  flex: 1,
  border: "none",
  outline: "none",
  background: "transparent",
  fontSize: "15px",
  color: "#591F24",
  fontFamily: "sans-serif",
};

const iconProps = { size: 18, color: "#591F24", strokeWidth: 2 };

export default function CheckoutForm({ formData, handleChange, onSubmit }: CheckoutFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "16px" }}
    >
      <label style={fieldStyle}>
        <User {...iconProps} />
        <input
          style={inputStyle}
          name="nome"
          placeholder="Nome completo"
          value={formData.nome}
          onChange={handleChange}
          required
        />
      </label>

      <label style={fieldStyle}>
        <MapPin {...iconProps} />
        <input
          style={inputStyle}
          name="cep"
          placeholder="CEP"
          value={formData.cep}
          onChange={handleChange}
        />
      </label>

      <label style={fieldStyle}>
        <Building2 {...iconProps} />
        <input
          style={inputStyle}
          name="cidade"
          placeholder="Cidade"
          value={formData.cidade}
          onChange={handleChange}
          required
        />
      </label>

      <label style={fieldStyle}>
        <Map {...iconProps} />
        <input
          style={inputStyle}
          name="rua"
          placeholder="Rua"
          value={formData.rua}
          onChange={handleChange}
          required
        />
      </label>

      <label style={fieldStyle}>
        <Hash {...iconProps} />
        <input
          style={inputStyle}
          name="numero"
          placeholder="Número"
          value={formData.numero}
          onChange={handleChange}
          required
        />
      </label>

      <label style={fieldStyle}>
        <MessageSquare {...iconProps} />
        <input
          style={inputStyle}
          name="complemento"
          placeholder="Complemento (Opcional)"
          value={formData.complemento}
          onChange={handleChange}
        />
      </label>

      <button
        type="submit"
        style={{
          marginTop: "8px",
          height: "48px",
          border: "none",
          borderRadius: "12px",
          backgroundColor: "#4A1219",
          color: "#FFFFFF",
          fontWeight: "bold",
          fontSize: "16px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        }}
      >
        Enviar Pedido via WhatsApp
        <Send size={18} strokeWidth={2} />
      </button>
    </form>
  );
}