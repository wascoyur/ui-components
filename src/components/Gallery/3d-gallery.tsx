import React from "react";
import { Container } from "../Container";
import styles from "./CustomLoader.module.css";
const CustomLoader = () => {
  return (
    <Container>
      <div className={styles.imageContainer}>
        {" "}
        {/* Используем классы из CSS модуля */}
        <span className={styles.tile1}>
          <img
            src="https://img.freepik.com/free-vector/spaceship-outer-space-with-planets-asteroids_107791-2262.jpg?w=2000&t=st=1675890192~exp=1675890792~hmac=55d3898dfa4592f8c7819703d7b0e09adf14b6b408368a3f54f7266c1c12adc9"
            alt="Image"
          />
        </span>
        <span className={styles.tile2}>
          <img
            src="https://img.freepik.com/free-vector/sunset-sunrise-ocean-nature-landscape_33099-2244.jpg?w=1380&t=st=1677927684~exp=1677928284~hmac=1cf23f3be67d718e4a1d05cf1a14e893967565a284146bbbb871e6367328c4d8"
            alt="Image"
          />
        </span>
        <span className={styles.tile3}>
          <img
            src="https://img.freepik.com/free-vector/space-illustration-night-alien-fantasy-landscape_33099-1873.jpg?w=2000&t=st=1677928595~exp=1677929195~hmac=ad7aa0e80ea72f9416738daec9444dffde69463e8c0f331b4628984eab0c4820"
            alt="Image"
          />
        </span>
        <span className={styles.tile4}>
          <img
            src="https://img.freepik.com/free-vector/nightclub-dance-floor-illustration_33099-2002.jpg?w=2000&t=st=1677928962~exp=1677929562~hmac=5d8540a6eb2dddb6411c769f8d561e8a21dd30b70f65e6ede94117712cdbf59e"
            alt="Image"
          />
        </span>
      </div>
    </Container>
  );
};

export default CustomLoader;
