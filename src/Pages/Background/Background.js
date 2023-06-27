import { useState } from "react";
import styles from "./background.module.css";

export default function Background() {
  const [scroll, setScroll] = useState(0);
  const images = require.context("../../img/Night", true);
  const imagesOrder = [
    [
      "sky",
      (x) => {
        return 0;
      },
      (y) => {
        return 0;
      },
    ],
    [
      "stars",
      (x) => {
        return 0;
      },
      (y) => {
        return y * -0.2;
      },
    ],
    [
      "moon",
      (x) => {
        return x * 0.5;
      },
      (y) => {
        return 0;
      },
    ],
    [
      "back",
      (x) => {
        return x * -0.1;
      },
      (y) => {
        return 0;
      },
    ],
    [
      "middle",
      (x) => {
        return x * -0.05;
      },
      (y) => {
        return 0;
      },
    ],
    [
      "water",
      (x) => {
        return x * -0.05;
      },
      (y) => {
        return 0;
      },
    ],
    [
      "front",
      (x) => {
        return 0;
      },
      (y) => {
        return 0;
      },
    ],
  ];
  const imageList = imagesOrder.map((image) => [
    images(`./${image[0]}.png`),
    image[1],
    image[2],
  ]);

  window.addEventListener("scroll", function () {
    const pos = window.scrollY;
    if (pos < 600) {
      setScroll(window.scrollY);
    }
  });

  function Image(image, index) {
    return (
      <img
        key={`Image${index}`}
        src={image[0]}
        style={{ top: image[1](scroll), left: image[2](scroll) }}
      />
    );
  }

  return <div className={styles.background}>{imageList.map(Image)}</div>;
}
