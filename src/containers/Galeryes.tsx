import s from "./Galeryes.module.css";
import CardsFlipEffectGallery from "containers/CardsFlipEffectGallery.tsx";

export function Galeryes() {
  return (
    <div className={s.root}>
      <h1>Galeryes Template</h1>
      <div className={s.container}>
        <CardsFlipEffectGallery />
      </div>
    </div>
  );
}
