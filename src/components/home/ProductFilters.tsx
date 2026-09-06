interface FiltersProps {
  search: string;
  setSearch: (val: string) => void;
  category: string;
  setCategory: (val: string) => void;
  sortBy: string;
  setSortBy: (val: string) => void;
}

export default function ProductFilters({ search, setSearch, category, setCategory, sortBy, setSortBy }: FiltersProps) {
  const inputStyle = {
    border: "1px solid #7D3E45",
    backgroundColor: "#42151B",
    color: "#E6C5A8",
    padding: "10px 14px",
    borderRadius: "8px",
    outline: "none",
    fontSize: "14px",
  };

  return (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "30px" }}>
      <input
        type="text"
        placeholder="Pesquisar produto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ ...inputStyle, flex: "1", minWidth: "220px" }}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
        <option>Todos</option>
        <option>Chocolate</option>
        <option>Biscoito</option>
        <option>Kit</option>
        <option>Doce</option>
      </select>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
        <option value="default">Ordenar</option>
        <option value="menor-preco">Menor preço</option>
        <option value="maior-preco">Maior preço</option>
        <option value="mais-vendidos">Mais vendidos</option>
        <option value="a-z">A-Z</option>
      </select>
    </div>
  );
}