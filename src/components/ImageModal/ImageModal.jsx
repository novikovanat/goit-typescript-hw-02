import Modal from "react-modal";
import { SiInstagram } from "react-icons/si";
import { RiCloseLargeLine } from "react-icons/ri";
import css from "./ImageModal.module.css";

export default function ImageModal({ onClose, modalState, image }) {
  const {
    description,
    alt_description,
    urls: { regular },
    user: { first_name, last_name, instagram_username },
  } = image;

  Modal.setAppElement("#root");

  const styles = {
    base: "fade",
  };

  function closeModal() {
    onClose(false);
  }
  let link = `https://www.instagram.com/${instagram_username}`;
  return (
    <>
      <Modal
        className={css.photoOpen}
        isOpen={modalState}
        onRequestClose={closeModal}
        style={styles}
        contentLabel="Image Modal"
      >
        <div className={css.div}>
          <button onClick={closeModal} className={css.closeButton}>
            <RiCloseLargeLine className={css.cross} />
          </button>

          <img
            className={css.largeImage}
            src={regular}
            alt={alt_description}
          ></img>
          <div className={css.textDiv}>
            <div className={css.flex}>
              {instagram_username !== null && (
                <a href={link} target="_blank" rel="noopener noreferer">
                  <SiInstagram className={css.social} />
                </a>
              )}
              <div>
                <div className={css.flex}>
                  Author:
                  <p className={css.author}>{first_name}</p>{" "}
                  <p className={css.author}>{last_name}</p>
                </div>
                <p className={css.description}>
                  {description === null ? alt_description : description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
