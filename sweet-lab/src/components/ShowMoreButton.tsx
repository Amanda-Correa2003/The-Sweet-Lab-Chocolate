interface ShowMoreProps {
  onClick: () => void;
  isMobile: boolean;
}

export default function ShowMoreButton({ onClick, isMobile }: ShowMoreProps) {
  return (
    <div style={{ textAlign: "center", marginTop: "35px" }}>
      <button
        onClick={onClick}
        style={{
          backgroundColor: "#3D2B1F",
          color: "#D4B595",
          border: "1px solid #7D3E45",
          padding: isMobile ? "8px 20px" : "10px 24px",
          borderRadius: "20px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "600",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        Ver mais produtos ▼
      </button>
    </div>
  );
}