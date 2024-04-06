import s from "./Cards.module.css";
import CardScrollSnap from "../components/CardScrollSnap.tsx";

export function CardsTemplate(className?: string) {
  return (
    <div className={s.root}>
      CardsTemplate
      <div className={className}>
        <CardScrollSnap />
      </div>
    </div>
  );
}
