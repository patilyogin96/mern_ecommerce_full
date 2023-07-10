import React from "react";
import styles from "./index.module.css";

import { useMediaQuery } from "@mui/material";
import HomeCategory from "../../Components/HomeCategory/HomeCategory";

interface CarouselItem {
  title: string;
  price: string;
}

interface HomeProps {
  title?: string;
  items?: Array<CarouselItem>;
}

const Homepage: React.FC<HomeProps> = ({  }) => {
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
          <HomeCategory
            
            items={carouselItemsArray}
          />
          {/* <HomeCategory title={"Best of Fashion"} /> */}
        </div>

        {/* second categry - electronics conainer */}
      </div>
    </>
  );
};

export default Homepage;

const carouselItemsArray: CarouselItem[] = [
  {
    title: "Air Conditioner 1",
    price: "40000",
  },
  {
    title: "Air Conditioner 2",
    price: "40000",
  },
  {
    title: "Air Conditioner 3",
    price: "40000",
  },
  {
    title: "Air Conditioner 4",
    price: "40000",
  },
  {
    title: "Air Conditioner 5",
    price: "40000",
  },
  {
    title: "Air Conditioner 6",
    price: "40000",
  },
];
