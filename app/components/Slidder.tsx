"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Card } from "./Card";

interface Project {
  id: string;
  title: string;
  alt: string;
  image_url: string;
  description: string;
  live_url: string;
}

interface Props {
  projects: Project[];
}

export const Slidder = ({ projects }: Props) => {
  const [index, setIndex] = useState(0);

  if (!projects.length) {
    return <div className="text-zinc-500">No projects found.</div>;
  }

  return (
    <div className="relative flex justify-center w-full min-h-[420px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <Card {...projects[index]} />
        </motion.div>
      </AnimatePresence>

      {/* Button */}
      <button
        onClick={() => setIndex((prev) => (prev + 1) % projects.length)}
        className="absolute bottom-4 right-4 rounded-full px-5 py-2 text-sm text-zinc-500 transition hover:bg-zinc-50"
      >
        Next
      </button>
    </div>
  );
};
