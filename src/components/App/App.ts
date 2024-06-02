type indexImage = null | number;
type loading = boolean;
type errorText = string;
type page = number;
type searchTerm = string;
type modalStatus = boolean;
type result = Array<Object>;
type responseType = { total: number; total_pages: number; results:Array<Object>};

type searchFunc = (searchTerm: searchTerm, page: page) => void;

