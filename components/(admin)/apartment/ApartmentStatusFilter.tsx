type Props = {
  filter: string;
  setFilter: (filter: string) => void;
};

const ApartmentStatusFilter = ({ filter, setFilter }: Props) => {
  const filters = [
    { value: "ALL", label: "Wszystkie" },
    { value: "AVAILABLE", label: "Dostępne" },
    { value: "RESERVED", label: "Zarezerwowane" },
    { value: "SOLD", label: "Sprzedane" },
  ];

  return (
    <div className="flex flex-wrap gap-2 ml-3">
      {filters.map((item) => (
        <button
          key={item.value}
          onClick={() => setFilter(item.value)}
          className={`border-b-2 px-3 py-2 text-sm transition cursor-pointer ${
            filter === item.value
              ? "border-primary font-semibold text-primary"
              : "border-transparent text-muted hover:text-text"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default ApartmentStatusFilter;
