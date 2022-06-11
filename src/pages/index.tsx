import { Balls, Button, Me } from "@/components";
import { assets } from "@/consts";
import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import { ReactElement } from "react";

const Overlay = (): ReactElement => {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Typography
          variant="h1"
          mt={{ xs: 0, md: 10 }}
          sx={{ mixBlendMode: "difference", color: "white" }}
        >
          Hi, I am Devkey
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: "500px" }}>
          Please send help, I am being held captive in the basement of a
          warehouse located at
        </Typography>
        <Button text={"Hire me"} />
      </Box>
      <Box
        sx={{
          pointerEvents: "none",
          position: { xs: "static", md: "absolute" },
          mt: 4,
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
            Please send help, I am being held captive in the basement of a
            warehouse located at
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
      </Box>
    </>
  );
};

const Underlay = (): ReactElement => {
  return (
    <>
      <Me />
      <Box
        sx={{
          position: "absolute",
          display: { md: "initial", xs: "none" },
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
      </Box>
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
