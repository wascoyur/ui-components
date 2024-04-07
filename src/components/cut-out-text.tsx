const TextCut = () => {
  return (
    <>
      <span className="text-cut-wrapper">
        <span className="text-cut">SUMMER VIBES</span>
      </span>
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900&display=swap");

          .text-cut-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 450px;
            height: 250px;

            background: url("/src/assets/images/summer.jpg");
            border-radius: 16px;
            background-size: cover;
          }

          .text-cut {
            background-color: white;
            padding: 12px;
            mix-blend-mode: screen;
            font-size: 35px;
            font-family: "Montserrat", sans-serif;
            font-weight: 900;
          }
        `}
      </style>
    </>
  );
};

export default TextCut;
