type ImageGallaryProps = {
  photosArray: ImageObjResponseType;
  onOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onItem: React.Dispatch<React.SetStateAction<IndexImage>>;
};

type Result = {
  urls: { small: string };
  alt_description: string;
  id: number;
};
