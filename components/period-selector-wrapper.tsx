"use client";

import { useState } from "react";
import PeriodSelector from "./periodselector";

export default function PeriodSelectorWrapper() {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");

  return (
    <PeriodSelector
      selectedPeriod={selectedPeriod}
      onPeriodChange={setSelectedPeriod}
    />
  );
}
