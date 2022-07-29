export const PagesAnimation = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 1,
    },
  },

  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
