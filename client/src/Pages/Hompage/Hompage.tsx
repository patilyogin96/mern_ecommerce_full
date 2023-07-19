import React from "react";
import styles from "./index.module.css";
import { useMediaQuery } from "@mui/material";
import HomeCategory from "../../Components/HomeCategory/HomeCategory";
import { electronicsHome } from "../../Utils/constants";
import { categoryFilter } from "../../Utils/constants";
import CategoryFilter from "../../Components/CategoryFilter/CategoryFilter";

interface CarouselItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface Filters {
  id: number;
  title: String;
  image: string;
}

interface HomeProps {
  title?: string;
  items?: Array<CarouselItem>;
  filter?: Array<Filters>;
}

const Homepage: React.FC<HomeProps> = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isLargeScreen = useMediaQuery("(min-width: 1200px)");

  console.log("HOmepageProps", isSmallScreen, isLargeScreen);

  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.categoryFilterContainer}>
          <CategoryFilter filter={categoryFilter} />
        </div>
        {/* <div className={styles.carouselContainer}>Carousel PArt</div> */}
        {/* first category - fashion category */}
        <div>
          <HomeCategory items={electronicsHome} />
        </div>
        <div>
          <HomeCategory items={electronicsHome} />
        </div>
      </div>
    </>
  );
};

export default Homepage;
