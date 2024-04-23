import s from "./RootPageStyles.module.css";
import CustomLoader from "components/spinners/custom-loader.tsx";
import CustomLoaderV1 from "components/spinners/custom-loader-v1.tsx";
import { ThreeDots } from "components/spinners/ThreeDots.tsx";

export function SpinnersPage() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <CustomLoader />
        <CustomLoaderV1 />
        <ThreeDots />
      </div>
    </div>
  );
}
