import { Box } from "@mui/material";
import { ReactElement } from "react";

export default function Me(): ReactElement {
  return (
    <Box
      sx={{
        position: { xs: "relative", md: "absolute" },
        top: { xs: 0, md: "50%" },
        marginTop: { xs: 5, md: "-17.5vw" },
        left: 0,
        right: 0,
        marginLeft: "auto",
        marginRight: "auto",
        width: { xs: "80vw", md: "35vw" },
        height: { xs: "80vw", md: "35vw" },
        "::before": {
          content: "''",
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          backgroundColor: "action.active",
          mixBlendMode: "difference",
        },
      }}
    >
      <Box
        sx={{
          isolation: "isolate",
          width: "100%",
          height: "100%",
          backgroundImage: `url(rock.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          borderRadius: "50%",
        }}
      />
    </Box>
  );
}
