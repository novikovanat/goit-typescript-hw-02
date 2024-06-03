type IndexImage = null | number;
type Loading = boolean;
type ErrorText = string;
type Page = number;
type SearchTerm = string;
type ModalStatus = boolean;
type ImageObjResponseType = {
  total: number;
  total_pages: number;
  results: Array<Result>;
};
type SearchFunc = (searchTerm: SearchTerm, page: Page) => Promise<void>;
