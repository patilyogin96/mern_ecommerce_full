import React from "react";
import styles from "./index.module.css";
import { title } from "process";

interface InfoProps {
  info: { id: number; title: string; price: number; image: string };
}

const HomeCard: React.FC<InfoProps> = ({ info }) => {
  console.log("InfoProps", info);
  const { title, image, price } = info;

  return (
    <>
      <div className={styles.cardContainer}>
        <div>
          <img src={image} alt="card_image" width={"250px"} height={"250px"} />
        </div>
        <div>{title}</div>
        <div>{`Rs ${price}`}</div>
      </div>
    </>
  );
};

export default HomeCard;
