import { Container } from "layouts/Container.tsx";

const FlexGrowPage = () => {
  return (
    <>
      <Container>
        <div className="gallery">
          <div className="card">Card 1</div>
          <div className="card">Card 2</div>
          <div className="card">Card 3</div>
          <div className="card">Card 4</div>
          <div className="card">Card 5</div>
        </div>
      </Container>
      <style>
        {`
          .gallery {
            display: flex;
            gap: 4px;
          }

          .card {
            position: relative;
            left: 0px;
            width: 80px;
            border-radius: 4px;
            padding: 8px;
            height: 160px;
            background-color: white;
            transition: 0.4s ease-in-out;
            flex: 1px;
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

          .card:nth-child(5) {
            background-color: #99c2fe;
          }

          .card:hover {
            flex: 3;
            font-weight: bold;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

export default FlexGrowPage;
