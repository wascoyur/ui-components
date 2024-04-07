import { Container } from "../../layouts/Container.tsx";
import s from "./CardsHoverEffect.module.css";

const CardsHoverEffect = () => {
  return (
    <Container>
      <span className={s["button-wrapper"]}>
        <a
          href="https://learning.atheros.ai"
          className={s.button}
          title="Atheros Learning"
        >
          Atheros Learning
        </a>
      </span>
    </Container>
  );
};

export default CardsHoverEffect;
