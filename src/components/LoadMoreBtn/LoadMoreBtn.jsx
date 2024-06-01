import css from "./LoadMoreBtn.module.css";
export default function LoadMoreBtn({ handleLoad, page }) {
  const  onClick= () => {
    handleLoad(page + 1);
  };

  return (
    <button className={css.loadButton} onClick={() => onClick()}>
      Load More
    </button>
  );
}
