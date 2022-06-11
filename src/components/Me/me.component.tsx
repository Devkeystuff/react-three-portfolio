import { animations, assets } from "@/consts";
import { useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { ReactElement } from "react";

export default function Me(): ReactElement {
  const theme = useTheme();
  return (
    <motion.div
      variants={animations.circleIn}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{
        zIndex: -1,
        position: "absolute",
        width: "35vw",
        height: "35vw",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <Image src={assets.images.Rock} alt={"Rock"} layout={"fill"} />
    </motion.div>
  );
}
