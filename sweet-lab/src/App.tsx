import React, { useState } from "react";
import { CartProvider } from "./CartContext";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

function AppContent() {
  const [telaAtual, setTelaAtual] = useState<"home" | "checkout">("home");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {telaAtual === "home" ? (
        <Home onIrParaCheckout={() => setTelaAtual("checkout")} />
      ) : (
        <Checkout onBack={() => setTelaAtual("home")} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
    
       
      