import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "./index.module.css";
import HomeCard from "../HomeCard/HomeCard";

interface CarouselProps {
  className?: string;
}
const items = [
  <div style={{ display: "flex" }}>
    <HomeCard />
    <HomeCard />
    <HomeCard />
  </div>,
  <div style={{ display: "flex" }}>
    <HomeCard />
    <HomeCard />
    <HomeCard />
  </div>,
];

const CarouselComponent: React.FC<CarouselProps> = ({
  className,
  ...otherProps
}) => {
  return (
    <div className={styles.container}>
      <Carousel showThumbs={false}>{items}</Carousel>
    </div>
  );
};

export default CarouselComponent;
