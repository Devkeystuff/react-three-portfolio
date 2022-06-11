import { assets } from "@/consts";
import { Box } from "@mui/material";
import { ReactElement } from "react";
import Burger from "./burger.component";

export default function Navbar(): ReactElement {
  return (
    <Box
      sx={{
        display: "flex",
        p: { xs: "30px 0", md: "60px 0" },
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Burger />
      <assets.images.Logo />
    </Box>
  );
}
