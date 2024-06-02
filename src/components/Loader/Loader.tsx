import { Hearts } from "react-loader-spinner";
import css from './Loader.module.css'

export default function Loader() {
  return (
    <div className={css.flexWrap}>
        <Hearts
          height="120"
          width="120"
          color="white"
          ariaLabel="hearts-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <Hearts
          height="120"
          width="120"
          color="white"
          ariaLabel="hearts-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
    </div>
  );
}
