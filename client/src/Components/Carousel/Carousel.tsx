import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "./index.module.css";
import HomeCard from "../HomeCard/HomeCard";

interface CarouselProps {
  className?: string;
  items: Array<{ id: number; title: string; price: number; image: string }>;
}
// const items = [
//   <div style={{ display: "flex" }}>
//     <HomeCard />
//     <HomeCard />
//     <HomeCard />
//   </div>,
//   <div style={{ display: "flex" }}>
//     <HomeCard />
//     <HomeCard />
//     <HomeCard />
//   </div>,
// ];

const CarouselComponent: React.FC<CarouselProps> = ({
  className,
  items,
  ...otherProps
}) => {
  console.log("Lats", className);

  const carSingleItem = items.map((e, i) => {
    return <HomeCard info={e} />;
  });

  console.log("DDDD", carSingleItem);

  return (
    <div className={`${styles.container} ${className}`}>
      <Carousel showThumbs={false} {...otherProps}>
        {carSingleItem}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
