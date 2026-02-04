"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#works" },
  { label: "Blog", href: "/" },
  { label: "Social Media", href: "#contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;

    e.preventDefault();

    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);

    target?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setOpen(false);
  };

  return (
    <nav>
      <button
        onClick={() => setOpen(true)}
        className="font-bold md:text-base text-xs"
      >
        Menu
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed inset-y-0 right-0 w-full md:w-1/2 bg-white z-50 p-10 flex flex-col font-poppins"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              {/* Header */}
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-xl font-hedvigserif">Menu</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="text-3xl font-bold"
                >
                  ✕
                </button>
              </div>

              {/* Links */}
              <motion.div
                className="flex flex-col text-lg gap-6 mt-16"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
              >
                {navLinks.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleScroll(e, item.href)}
                      className="hover:opacity-70 transition-opacity"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
