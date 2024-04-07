import { Container } from "layouts/Container.tsx";

const CardsHoverEffect = () => {
  return (
    <>
      <Container>
        <div className="gallery">
          <div className="card">Card 1</div>
          <div className="card">Card 2</div>
          <div className="card">Card 3</div>
          <div className="card">Card 4</div>
        </div>
      </Container>
      <style>
        {`
          .gallery {
            display: flex;
            left: calc(50% - 330px);
          }

          .card {
            position: relative;
            left: 0px;
            width: 110px;
            height: 150px;
            padding: 8px;
            background-color: white;
            border-radius: 8px;
            transition: 1s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 25px;
          }

          .card:nth-child(1) {
            background-color: #b881ff;
          }

          .card:nth-child(2) {
            background-color: #ff9950;
          }

          .card:nth-child(3) {
            background-color: #aaec8a;
          }

          .card:nth-child(4) {
            background-color: #ed6a5e;
          }

          .card:not(:first-child) {
            margin-left: -55px;
          }

          .card:hover {
            transform: translateY(-16px);
            font-weight: bold;
            cursor: pointer;
          }

          .card:hover ~ .card {
            left: 55px;
          }
        `}
      </style>
    </>
  );
};

export default CardsHoverEffect;
