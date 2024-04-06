import s from "./CardsTemplates.module.css";
import CardScrollSnap from "../components/CardScrollSnap.tsx";
import CustomLoader from "../components/Gallery/3d-gallery.tsx";

export function CardsTemplate() {
  return (
    <div className={s.root}>
      <h1>CardsTemplate</h1>
      <div className={s.container}>
        <CardScrollSnap />
        <CustomLoader />
      </div>
    </div>
  );
}
