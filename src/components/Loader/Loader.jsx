import { Hearts } from "react-loader-spinner";
import css from './Loader.module.css'

export default function Loader({isLoading}) {
  return (
    <div className={css.flexWrap}>
        <Hearts
          height="120"
          width="120"
          color="white"
          ariaLabel="hearts-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={isLoading}
        />
        <Hearts
          height="120"
          width="120"
          color="white"
          ariaLabel="hearts-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={isLoading}
        />
    </div>
  );
}
