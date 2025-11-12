"use client";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { ShowMore } from "@/components/ui/show-more";

export function Component() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="py-6">
      <ShowMore onChange={setIsExpanded} isSelected={isExpanded}>
        {isExpanded ? "Ver Mais" : "Fechar"}
        <ChevronDownIcon
          className={`${isExpanded ? "rotate-180" : ""} size-4 transition-transform duration-200`}
        />
      </ShowMore>
    </div>
  );
}
