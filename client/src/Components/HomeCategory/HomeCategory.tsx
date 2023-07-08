import React from "react";
import styles from "./index.module.css";
import { Box, Grid } from "@mui/material";
import { useMediaQuery } from "@mui/material";
interface HomeCategoryProps {
  title?: String;
}

const HomeCategory: React.FC<HomeCategoryProps> = ({ title }) => {
  return (
    <>
      <div className={styles.categoryContainer}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid xs={4} md={4} sx={{ border: "1px solid red" }}>
              <div>{title}</div>
            </Grid>
            <Grid xs={8} md={8} sx={{ border: "1px solid green" }}>
              <div>Electronics Carousel</div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default HomeCategory;
