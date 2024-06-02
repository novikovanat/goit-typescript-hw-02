import React from "react";
import css from "./ImageCard.module.css";
import { imageCardProps } from "./ImageCard.js";
export default function ImageCard({
  small,
  alt,
  onOpen,
  onItem,
  index,
}: imageCardProps) {
  function handleImageClik() {
    onOpen(true);
    onItem(index);
  }
  return (
    <img
      className={css.smallImage}
      src={small}
      alt={alt}
      onClick={() => handleImageClik()}
    />
  );
}
