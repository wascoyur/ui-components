import s from "./RootPageStyles.module.css";
import CustomLoader from "components/spinners/custom-loader.tsx";
import CustomLoaderV1 from "components/spinners/custom-loader-v1.tsx";

export function SpinnersPage() {
  return (
    <div className={s.root}>
      <h1>SpinnersPage</h1>
      <div className={s.container}>
        <CustomLoader />
        <CustomLoaderV1 />
      </div>
    </div>
  );
}
