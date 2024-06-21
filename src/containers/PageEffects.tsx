import s from "./RootPageStyles.module.css";
import { FloatItem } from "components/effects/FloatItem.tsx";

export function PageEffects() {
  type ListItem<T extends any[]> = T extends (infer X)[] ? X : never;
  const arr: ListItem<number[]> = [1, 3];

  console.log(arr.valueOf());
  return (
    <div className={s.root}>
      <div className={s.container}>
        <FloatItem />
      </div>
    </div>
  );
}
