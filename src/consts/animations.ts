import { Variants } from "framer-motion";

const circleIn: Variants = {
  initial: {
    clipPath: "circle(0% at 50% 50%)",
  },
  animate: {
    clipPath: "circle(50% at 50% 50%)",
  },
};

const fadeInRight: Variants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
}

const fadeInBottom: Variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
}

const animations = {
  circleIn,
  fadeInRight,
  fadeInBottom,
}

export default animations;
