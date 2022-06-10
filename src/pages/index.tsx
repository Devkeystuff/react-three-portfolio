import Navbar from "@/components";
import Button from "@/components/Button";
import assets from "@/public";
import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box sx={{ position: "relative", height: "100%" }}>
      <Navbar />
      <Box>
        <Typography variant="h1">Hi, I am Devkey</Typography>
        <Typography variant="body1" sx={{ width: "500px" }}>
          Please send help, I am being held captive in the basement of a
          warehouse located at
        </Typography>
        <Button text={"Hire me"} />
      </Box>
      <Box sx={{ position: "absolute", bottom: 100, left: 0 }}>
        <Box
          sx={{ height: "1px", width: 40, backgroundColor: "common.black" }}
        />
        <Typography variant={"caption"}>Some header</Typography>
        <Typography variant={"body1"} sx={{ width: "350px" }}>
          Please send help, I am being held captive in the basement of a
          warehouse located at
        </Typography>
        <assets.images.Barcode style={{ marginTop: "100px" }} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 100,
          right: 0,
          display: "flex",
          gap: 2,
        }}
      >
        <Typography variant="subtitle1">git</Typography>
        <Typography variant="subtitle1">lnkdin</Typography>
        <Typography variant="subtitle1">tw</Typography>
        <Typography variant="subtitle1">ig</Typography>
      </Box>
    </Box>
  );
};

export default Home;
