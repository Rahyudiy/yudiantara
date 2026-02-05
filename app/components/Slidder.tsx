"use client";

import { portofolio } from "../data/portofolio";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Card } from "./Card";

export const Slidder = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative flex justify-center w-full min-h-[420px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
        >
          <Card {...portofolio[index]} />
        </motion.div>
      </AnimatePresence>

      <button
        onClick={() => setIndex((prev) => (prev + 1) % portofolio.length)}
        className="absolute bottom-2 right-5 text-sm opacity-50 hover:opacity-100 duration-200"
      >
        Next
      </button>
    </div>
  );
};
