import { Stack } from "@mui/material";
import React, { ReactElement } from "react";

export default function Burger(): ReactElement {
  return (
    <Stack
      spacing={1}
      sx={{
        "& div": {
          height: 2,
          width: 30,
          backgroundColor: "common.black",
        },
      }}
    >
      <div />
      <div />
    </Stack>
  );
}
