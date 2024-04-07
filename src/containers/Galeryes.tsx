import s from "./Galeryes.module.css";
import CardsFlipEffectGallery from "components/Gallery/CardsFlipEffectGallery.tsx";
import CardsHoverEffect from "components/Gallery/CardsHoverEffect.tsx";

export function Galeryes() {
  return (
    <div className={s.root}>
      <h1>Galeryes Template</h1>
      <div className={s.container}>
        <CardsFlipEffectGallery />
        <CardsHoverEffect />
      </div>
    </div>
  );
}
