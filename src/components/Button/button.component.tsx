import assets from "@/public";
import { Box, Typography } from "@mui/material";
import React, { ReactElement } from "react";

interface Props {
  text: string;
}

export default function Button({ text }: Props): ReactElement {
  return (
    <Box
      sx={{
        backgroundColor: "action.active",
        outline: "none",
        p: "14px 22px",
        display: "flex",
        alignItems: "center",
        width: "fit-content",
        mt: 10,
      }}
    >
      <Typography variant={"button"}>{text}</Typography>
      <assets.images.ArrowRight style={{ marginLeft: "10px" }} />
    </Box>
  );
}
