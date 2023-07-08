import React from "react";
import styles from "./index.module.css";

import { useMediaQuery } from "@mui/material";
import HomeCategory from "../../Components/HomeCategory/HomeCategory";
interface HomeProps {
  title?: string;
}

const Homepage: React.FC<HomeProps> = ({ title = "Home" }) => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isLargeScreen = useMediaQuery("(min-width: 1200px)");

  console.log("HOmepageProps", isSmallScreen, isLargeScreen);

  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.categoryFilterContainer}>Category Filter</div>
        <div className={styles.carouselContainer}>Carousel PArt</div>
        {/* first category - fashion category */}
        <div>
          <HomeCategory title={"Best of Electronics"} />
          <HomeCategory title={"Best of Fashion"} />
        </div>

        {/* second categry - electronics conainer */}
      </div>
    </>
  );
};

export default Homepage;
