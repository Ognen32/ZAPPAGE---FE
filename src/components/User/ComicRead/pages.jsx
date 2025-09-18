import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { motion, AnimatePresence } from "framer-motion";

function Pages({ pages, currentPage }) {
  const prevPage = pages.find((p) => p.page === currentPage - 1);
  const current = pages.find((p) => p.page === currentPage);
  const nextPage = pages.find((p) => p.page === currentPage + 1);

  // Animation positions and styles
  const positions = {
    prev: { x: -80, scale: 1, opacity: 0.4, zIndex: 1 },
    current: { x: 0, scale: 1, opacity: 1, zIndex: 3 },
    next: { x: 80, scale: 0.95, opacity: 0.4, zIndex: 1 },
  };

  return (
    <div
      className="relative flex justify-center items-center w-full h-full overflow-hidden"
      style={{ position: "relative" }}
    >
      {/* Prev Page */}
      <AnimatePresence initial={false}>
        {prevPage && (
          <motion.img
            key={prevPage.page}
            src={prevPage.pageUrl}
            alt={`Page ${prevPage.page}`}
            initial={{ x: -150, opacity: 0 }}
            animate={positions.prev}
            exit={{ x: -150, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="object-contain absolute"
            style={{
              height: "80%",
              width: "auto",
              left: "-60px",
              position: "absolute",
              zIndex: positions.prev.zIndex,
            }}
            layoutId={`page-${prevPage.page}`}
          />
        )}
      </AnimatePresence>

      {/* Current Page with Zoom */}
      <AnimatePresence initial={false}>
        {current && (
          <motion.div
            key={current.page}
            initial={{ x: 150, opacity: 0 }}
            animate={positions.current}
            exit={{ x: 150, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="inline-block w-[calc(60vh)] h-fit z-3 relative"
            style={{ zIndex: positions.current.zIndex }}
            layoutId={`page-${current.page}`}
          >
            <Zoom key={current.page}>
              <img
                src={current.pageUrl}
                alt={`Page ${current.page}`}
                style={{
                  height: "100%",
                  width: "auto",
                  display: "inline-block",
                  objectFit: "contain",
                  position: "relative",
                  cursor: "zoom-in",
                  borderWidth: "4px",
                  borderStyle: "solid",
                  borderColor: "transparent",
                  borderRadius: "8px", // rounded-lg = 0.5rem = 8px
                  background:
                    "linear-gradient(to right, #B45309, #D97706, #F59E0B)", // from-yellow-700 via-yellow-600 to-yellow-500
                }}
              />
            </Zoom>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Next Page */}
      <AnimatePresence initial={false}>
        {nextPage && (
          <motion.img
            key={nextPage.page}
            src={nextPage.pageUrl}
            alt={`Page ${nextPage.page}`}
            initial={{ x: 150, opacity: 0 }}
            animate={positions.next}
            exit={{ x: 150, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="object-contain absolute"
            style={{
              height: "80%",
              width: "auto",
              right: "-60px",
              position: "absolute",
              zIndex: positions.next.zIndex,
            }}
            layoutId={`page-${nextPage.page}`}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Pages;
