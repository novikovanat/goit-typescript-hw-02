export type imageCardProps = {
  small: string;
  alt: string;
  onOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onItem: React.Dispatch<React.SetStateAction<IndexImage>>;
  index: number;
};
