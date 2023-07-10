import React from "react";
import styles from "./index.module.css";
import { Box, Grid } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import CarouselComponent from "../Carousel/Carousel";

// interface CarouselItem {
//   title: string;
//   price: string;
// }

interface HomeCategoryProps {
  items: Array<{ title: string; price: string }>;
}

const HomeCategory: React.FC<HomeCategoryProps> = ({ items }) => {
  console.log("Chekitems", items);

  return (
    <>
      <div className={styles.categoryContainer}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={4} md={4} sx={{ border: "1px solid red" }}>
              <div>Electronics</div>
            </Grid>
            <Grid item xs={8} md={8} sx={{ border: "1px solid green" }}>
              <div>
                <CarouselComponent items={items}  />
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default HomeCategory;
