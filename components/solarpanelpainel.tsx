"use client";

import { Battery } from "lucide-react";

interface SolarPanelCardProps {
  title: string;
  description: string;
  batteryPercentage: number;
  productionKwh?: number;
}

export function SolarPanelCard({
  title,
  description,
  batteryPercentage,
  productionKwh,
}: SolarPanelCardProps) {
  return (
    <div className="bg-card rounded-2xl p-6 max-w-md border border-t-accent">
      <div className="flex items-start justify-between">
        {/* Left side - Info */}
        <div className="flex-1">
          <h2 className="text-white text-lg font-medium mb-1">{title}</h2>
          <p className="text-gray-500 text-xs mb-3 opacity-80">
            {description}
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Battery
                className="text-[#98F85D]"
                size={20}
                fill="currentColor"
              />
              <span className="text-white text-sm">
                {batteryPercentage}%
              </span>
            </div>

            {productionKwh !== undefined && (
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-[#98F85D] rounded-full"></div>
                <span className="text-gray-500 text-xs">
                  {productionKwh.toFixed(1)} kWh
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right side - Solar Panel Icon */}
        <div className="ml-4">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            className="drop-shadow-lg"
          >
            {/* Solar panel grid */}
            <g transform="translate(20, 15)">
              {/* Top row */}
              <rect
                x="0"
                y="0"
                width="25"
                height="35"
                fill="#2a2a2a"
                stroke="#161616"
                strokeWidth="2"
                rx="2"
              />
              <rect
                x="27"
                y="0"
                width="25"
                height="35"
                fill="#333333"
                stroke="#161616"
                strokeWidth="2"
                rx="2"
              />
              <rect
                x="54"
                y="0"
                width="25"
                height="35"
                fill="#2a2a2a"
                stroke="#161616"
                strokeWidth="2"
                rx="2"
              />

              {/* Bottom row */}
              <rect
                x="0"
                y="37"
                width="25"
                height="35"
                fill="#333333"
                stroke="#161616"
                strokeWidth="2"
                rx="2"
              />
              <rect
                x="27"
                y="37"
                width="25"
                height="35"
                fill="#2a2a2a"
                stroke="#161616"
                strokeWidth="2"
                rx="2"
              />
              <rect
                x="54"
                y="37"
                width="25"
                height="35"
                fill="#333333"
                stroke="#161616"
                strokeWidth="2"
                rx="2"
              />

              {/* Panel details - grid lines */}
              {[0, 27, 54].map((x, i) => (
                <g key={`col-${i}`}>
                  <line
                    x1={x + 12.5}
                    y1="2"
                    x2={x + 12.5}
                    y2="33"
                    stroke="bg-accent"
                    strokeWidth="1"
                  />
                  <line
                    x1={x + 12.5}
                    y1="39"
                    x2={x + 12.5}
                    y2="70"
                    stroke="bg-accent"
                    strokeWidth="1"
                  />
                  <line
                    x1={x + 2}
                    y1="17.5"
                    x2={x + 23}
                    y2="17.5"
                    stroke="bg-accent"
                    strokeWidth="1"
                  />
                  <line
                    x1={x + 2}
                    y1="54.5"
                    x2={x + 23}
                    y2="54.5"
                    stroke="bg-accent"
                    strokeWidth="1"
                  />
                </g>
              ))}

              {/* Stand */}
              <path
                d="M 40 72 L 35 95 L 45 95 Z"
                fill="#98F85D"
                stroke="#98F85D"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
