import { Component } from "@/components/controlled";
import PageTitle from "@/components/pagetitle";
import PeriodSelectorWrapper from "@/components/period-selector-wrapper";
import { NumberDotLineChart } from "@/components/ui/number-dot-chart";

export default async function Home() {
  return (
    <div
      className="h-screen w-full bg-white dark:bg-background font-sans overflow-y-auto flex items-center justify-center"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <main className="flex flex-col items-center w-full max-w-4xl p-6">
        <div className="w-full max-w-2xl">
          <PageTitle>Energia inteligente, economia inteligente</PageTitle>

          <PeriodSelectorWrapper />

          <div className="items-center justify-center">
            <NumberDotLineChart />
          </div>
        </div>

        <div className="mt-16">
          <Component />
        </div>
      </main>
    </div>
  );
}
