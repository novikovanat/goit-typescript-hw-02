import ImageCard from "../ImageCard/ImageCard.jsx";
import css from "./ImageGallery.module.css";
// import {imageGallaryProps} from "./ImageGallery.ts"

export default function ImageGallery({
  photosArray: { results },
  onOpen,
  onItem,
}: ImageGallaryProps) {
  const imageList = results.map(
    ({ urls: { small }, alt_description, id }, index) => (
      <li className={css.imageItem} key={id}>
        <ImageCard
          small={small}
          alt={alt_description}
          onOpen={onOpen}
          onItem={onItem}
          index={index}
        />
      </li>
    )
  );
  return <ul className={css.gallery}>{imageList}</ul>;
}
