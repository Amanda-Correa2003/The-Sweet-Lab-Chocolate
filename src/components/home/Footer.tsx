import { useState } from "react";

export default function Footer() {
  const [hover, setHover] = useState(false);

  return (
    <footer
      style={{
        backgroundColor: "#3D2B1F",
        color: "beige",
        padding: "25px",
        marginTop: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
      }}
    >
      {/* Espaço do lado esquerdo, para o texto continuar centralizado */}
      <div style={{ width: "24px", flexShrink: 0 }} />

      <div style={{ flex: 1, textAlign: "center" }}>
        <p><strong>E-mail:</strong> contato@sweetlab.com</p>

        <p><strong>Telefone:</strong> (21) 3333-3333</p>

        <p><strong>Celular:</strong> (21) 96423-9143</p>

        <p><strong>Endereço:</strong> Rua Castro, 123 - Rio de Janeiro/RJ</p>
      </div>

      <a
        href="https://www.instagram.com/projetosdev.amanda?igsh=YTB4dXB4NzlicjFt"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        title="Instagram"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          width: "24px",
          height: "24px",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: hover ? "#FFFFFF" : "#F4EBD9",
          transform: hover ? "translateY(-2px) scale(1.15)" : "none",
          transition: "color 0.2s, transform 0.2s",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
        </svg>
      </a>
    </footer>
  );
}