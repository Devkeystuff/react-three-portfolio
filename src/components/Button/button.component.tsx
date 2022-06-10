import assets from "@/public";
import { alpha, Box, Typography, useTheme } from "@mui/material";
import { ReactElement } from "react";

interface Props {
  text: string;
}

export default function Button({ text }: Props): ReactElement {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "action.active",
        outline: "none",
        p: "14px 22px",
        display: "flex",
        alignItems: "center",
        width: "fit-content",
        mt: { xs: 3, md: 10 },
        boxShadow: `0px 8px 30px ${alpha(theme.palette.action.active, 0.4)}`,
        cursor: "pointer",
      }}
    >
      <Typography variant={"button"}>{text}</Typography>
      <assets.images.ArrowRight style={{ marginLeft: "10px" }} />
    </Box>
  );
}
