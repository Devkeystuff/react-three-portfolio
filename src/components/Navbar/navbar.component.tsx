import assets from "@/public";
import { Box } from "@mui/material";
import React, { ReactElement } from "react";
import Burger from "./burger.component";

export default function Navbar(): ReactElement {
  return (
    <Box sx={{ display: "flex", p: "60px 0", justifyContent: "space-between" }}>
      <Burger />
      <assets.images.Logo />
    </Box>
  );
}
