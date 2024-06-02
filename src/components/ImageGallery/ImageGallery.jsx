import ImageCard from "../ImageCard/ImageCard.tsx";
import css from "./ImageGallery.module.css";

export default function ImageGallery({
  photosArray: { results },
  onOpen,
  onItem,
}) {
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
