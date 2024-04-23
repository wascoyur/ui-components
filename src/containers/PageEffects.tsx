import s from "./RootPageStyles.module.css";
import { FloatItem } from "components/effects/FloatItem.tsx";

export function PageEffects() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <FloatItem />
      </div>
    </div>
  );
}
