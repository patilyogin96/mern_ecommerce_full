import React from "react";
import styles from "./index.module.css";
import { Box, Button, Grid } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import CarouselComponent from "../Carousel/Carousel";
import HomeCard from "../HomeCard/HomeCard";

// interface CarouselItem {
//   title: string;
//   price: string;
// }

interface HomeCategoryProps {
  items: Array<{ id: number; title: string; price: number; image: string }>;
}

const HomeCategory: React.FC<HomeCategoryProps> = ({ items }) => {
  console.log("Chekitems", items);

  return (
    <>
      <div className={styles.categoryContainer}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={4} md={4} sx={{ border: "1px solid red" }}>
              <div className={styles.catSideBox}>
                <div>
                  <h1>Best of electronics</h1>
                </div>
                <div>
                  <Button>view all</Button>
                </div>
              </div>
            </Grid>
            <Grid item xs={8} md={8} sx={{ border: "1px solid green" }}>
              <div className={styles.flexBox}>
                {items?.map((item) => {
                  return (
                    <>
                      <HomeCard info={item} />
                    </>
                  );
                })}
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default HomeCategory;
