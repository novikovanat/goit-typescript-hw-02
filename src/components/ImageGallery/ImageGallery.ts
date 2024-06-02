type ImageGallaryProps = {
  photosArray: ImageObjResponseType;
  onOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onItem: React.Dispatch<React.SetStateAction<IndexImage>>;
};

type Result = {
  description: string;
  urls: { small: string; regular: string };
  alt_description: string;
  id: number;
  user: { first_name: string; last_name: string; instagram_username: string };
};
