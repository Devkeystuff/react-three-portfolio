import { Balls, Button, Me } from "@/components";
import { animations, assets } from "@/consts";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import { ReactElement } from "react";

const Overlay = (): ReactElement => {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Typography
          variant="h1"
          mt={{ xs: 0, md: 10 }}
          sx={{
            mixBlendMode: "difference",
            color: "white",
          }}
        >
          Hi, I am Devkey
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: "500px" }}>
          Et harum amet aspernatur voluptatem explicabo possimus culpa placeat.
          Modi ipsam sapiente aut vel et enim eaque.
        </Typography>
        <Button text={"Hire me"} />
      </Box>
      <motion.div
        variants={animations.fadeInBottom}
        transition={{ duration: 0.3, ease: "easeOut", delay: 1 }}
        style={{
          pointerEvents: "none",
          position: "absolute",
          marginTop: 4,
          bottom: 80,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "100%",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: { md: "initial", xs: "none" },
          }}
        >
          <Box
            sx={{ height: "1px", width: 40, backgroundColor: "common.black" }}
          />
          <Typography variant={"caption"}>Some header</Typography>
          <Typography variant={"body1"} sx={{ maxWidth: 350 }}>
            Et harum amet aspernatur voluptatem explicabo possimus culpa
            placeat.
          </Typography>
          <assets.images.Barcode style={{ marginTop: "100px" }} />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant={"body1"}>Explore my work</Typography>
          <assets.images.ArrowDown />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            color: "#424242",
          }}
        >
          <Typography variant="subtitle2">git</Typography>
          <Typography variant="subtitle2">lnkdin</Typography>
          <Typography variant="subtitle2">tw</Typography>
          <Typography variant="subtitle2">ig</Typography>
        </Box>
      </motion.div>
    </>
  );
};

const Underlay = (): ReactElement => {
  return (
    <>
      <Me />
      <motion.div
        variants={animations.fadeInRight}
        transition={{ duration: 1, ease: "easeOut", delay: 2 }}
        style={{
          position: "absolute",
          top: "50%",
          left: "80%",
          transform: "translateY(-50%)",
        }}
      >
        <Typography variant={"subtitle1"}>
          <Box
            sx={{
              position: "absolute",
              fontSize: 40,
              transform: "translate(-120%, -30%)",
              color: "secondary.main",
              fontFamily: "Inter",
              fontWeight: "bold",
            }}
          >
            “
          </Box>
          When life gives you balls, play basketball. <br /> I don’t play
          basketball
        </Typography>
      </motion.div>
    </>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Underlay />
      <Box
        sx={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          top: 0,
          left: "-8vw",
        }}
      >
        <Balls />
      </Box>
      <Overlay />
    </>
  );
};

export default Home;
