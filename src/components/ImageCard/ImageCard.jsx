import css from "./ImageCard.module.css";
export default function ImageCard({ small, alt, onOpen, onItem, index }) {
  function handleImageClik() {
    onOpen(true);
    onItem(index);
  }
  return (
    <>
      <img
        className={css.smallImage}
        src={small}
        alt={alt}
        onClick={() => handleImageClik()}
      />
    </>
  );
}
