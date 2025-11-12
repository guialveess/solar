import { Component } from "@/components/controlled";
import PageTitle from "@/components/pagetitle";
import PeriodSelectorWrapper from "@/components/period-selector-wrapper";
import { NumberDotLineChart } from "@/components/ui/number-dot-chart";

export default async function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-background font-sans overflow-hidden">
      <main className="flex flex-col items-center justify-center w-full max-w-4xl p-6 h-full">
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
