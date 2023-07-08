import React from "react";
import { Box, Grid } from "@mui/material";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, backgroundColor: "#1b2d40" }}>
        <Grid container>
          <Grid
            xs={12}
            md={3}
            sx={{ border: "1px solid black", padding: "5px" }}
          >
            First
          </Grid>
          <Grid
            xs={12}
            md={4.5}
            sx={{ border: "1px solid red", padding: "5px" }}
          >
            Second
          </Grid>
          <Grid
            xs={12}
            md={4.5}
            sx={{ border: "1px solid white", padding: "5px" }}
          >
            Third
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Footer;
