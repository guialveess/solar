"use client";

interface PeriodSelectorProps {
  selectedPeriod: string;
  onPeriodChange: (period: string) => void;
}

export default function PeriodSelector({
  selectedPeriod,
  onPeriodChange,
}: PeriodSelectorProps) {
  const periods = [
    { id: "monthly", label: "Mensal" },
    { id: "year", label: "Ano" },
    { id: "week", label: "Semana" },
  ];

  return (
    <div className="flex gap-2 mb-6">
      {periods.map((period) => (
        <button
          key={period.id}
          onClick={() => onPeriodChange(period.id)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            selectedPeriod === period.id
              ? "bg-accent text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-300"
          }`}
        >
          {period.label}
        </button>
      ))}
    </div>
  );
}
