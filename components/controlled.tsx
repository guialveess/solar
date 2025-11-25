"use client";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { ShowMore } from "@/components/ui/show-more";
import { SolarPanelCard } from "@/components/solarpanelpainel";
import { motion, AnimatePresence, Variants } from "framer-motion";

export function Component() {
  const [isExpanded, setIsExpanded] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut" as const,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="w-full max-w-2xl">
      <ShowMore onChange={setIsExpanded} isSelected={isExpanded}>
        <motion.div
          initial={false}
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDownIcon className="size-4" />
        </motion.div>
        {isExpanded ? "Fechar" : "Ver Mais"}
      </ShowMore>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Painel Solar 1",
                  description: "Posição: Telhado principal",
                  batteryPercentage: 85,
                  productionKwh: 12,
                },
              ].map((panel, index) => (
                <motion.div key={index} variants={itemVariants} layout>
                  <SolarPanelCard
                    title={panel.title}
                    description={panel.description}
                    batteryPercentage={panel.batteryPercentage}
                    productionKwh={panel.batteryPercentage}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
