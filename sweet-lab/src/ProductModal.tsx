import {Product} from "../types/Product"

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl relative animate-fade-in">
        
        {/* Botão de Fechar */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md z-10"
        >
          ✕
        </button>

        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          <span className="text-xs font-bold uppercase tracking-wide text-amber-600 bg-amber-50 px-2 py-1 rounded">
            {product.category}
          </span>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-2">{product.name}</h2>
          
          <p className="text-sm text-gray-800 mt-2">
            <span className="font-semibold text-gray-800">Ingredientes:</span> {product.ingredients}
          </p>

          <div className="flex items-center justify-between mt-6">
            <span className="text-2xl font-black text-amber-700">
              R$ {product.price.toFixed(2)}
            </span>
            
            <button
              onClick={() => {
  onAddToCart(product);
  onClose();
}}
              className="bg-amber-600 hover:bg-amber-700 text-brown font-semibold px-5 py-2.5 rounded-xl transition-all"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};