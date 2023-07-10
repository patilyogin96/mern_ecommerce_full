import React from "react";
import styles from "./index.module.css";

const HomeCard: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div style={{ height: "60%" }}>
          <img src="" alt="image_card" />
        </div>
        <div>Air Conditionder</div>
        <div>Rs 40000</div>
      </div>
    </>
  );
};

export default HomeCard;
