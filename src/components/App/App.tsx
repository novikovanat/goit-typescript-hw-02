import { useEffect, useState } from "react";
import fetchPhotos from "../JS/fetchPhotos";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import "./App.module.css";
import toast from "react-hot-toast";

function App() {
  const [response, setResponse] = useState<ImageObjResponseType>({
    total: 0,
    total_pages: 0,
    results: [],
  });

  const [loading, setLoading] = useState<Loading>(false);
  const [error, setError] = useState<ErrorText>("");
  const [page, setPage] = useState<Page>(1);
  const [searchTerm, setSearchTerm] = useState<SearchTerm>("");
  const [modalIsOpen, setModalIsOpen] = useState<ModalStatus>(false);
  const [currentImage, setCurrentImage] = useState<IndexImage>(null);

  useEffect(() => {
    if (searchTerm === "") {
      return;
    }
    search(searchTerm, page);
  }, [searchTerm, page]);

  const search:searchFunc = async (searchTerm, page) => {
    try {
      setLoading(true);
      setError("");
      const photosArray:ImageObjResponseType= await fetchPhotos(searchTerm, page);
      const { results } = photosArray;
      if (results.length == 0) {
        toast(`We couldn't find anything like ${searchTerm}`);
        return;
      }
      if (page > 1) {
        setResponse((prevResponse) => {
          const { results: prevResults } = prevResponse;
          return { ...prevResponse, results: prevResults.concat(results) };
        });
      } else {
        setResponse(photosArray);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {modalIsOpen === false && (
        <SearchBar onTerm={setSearchTerm} onReset={setPage} />
      )}
      {error !== "" ? (
        <ErrorMessage errorText={error} />
      ) : (
        <>
          {0 < response.results.length && (
            <ImageGallery
              photosArray={response}
              onOpen={setModalIsOpen}
              onItem={setCurrentImage}
            />
          )}
          {currentImage !== null && (
            <ImageModal
              onClose={setModalIsOpen}
              modalState={modalIsOpen}
              image={response.results[currentImage]}
            />
          )}
        </>
      )}
      {loading === true && <Loader isLoading={loading} />}
      {page < response.total_pages && (
        <LoadMoreBtn handleLoad={setPage} page={page} />
      )}
    </>
  );
}

export default App;
