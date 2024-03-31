// Content.tsx Component
import { AnimatePresence, motion } from "framer-motion";

export default function Content({
  children,
  className,
  selectedTabIndex,
  direction,
}: {
  direction: number;
  selectedTabIndex: number;
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={selectedTabIndex}
        variants={{
          enter: (direction: number) => ({
            opacity: 0,
            x: direction > 0 ? 100 : -100,
            scale: 0.8,
          }),
          center: { opacity: 1, x: 0, scale: 1, rotate: 0 },
          exit: (direction: number) => ({
            opacity: 0,
            x: direction > 0 ? -100 : 100,
            scale: 0.8,
            position: "absolute",
          }),
        }}
        transition={{ duration: 0.25 }}
        initial={"enter"}
        animate={"center"}
        exit={"exit"}
        custom={direction}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
