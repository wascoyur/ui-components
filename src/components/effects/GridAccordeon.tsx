const GridAccordeon = () => {
  return (
    <>
      <div className="container-accordeon">
        <div className="item">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
          deleniti deserunt, ea enim eum facere fugiat, fugit libero magnam
          molestiae nisi odit praesentium rem soluta temporibus. Maiores nam
          temporibus voluptas.
        </div>
      </div>
      <style jsx>
        {`
          .container-accordeon {
            display: grid;
            grid-template-rows: 0fr;
            background-color: hsl(200 50% 50%);
            padding: 1rem;
            transition: grid-template-rows 500ms;
          }
          .container-accordeon > div {
            overflow: hidden;
          }
          .container-accordeon:hover {
            grid-template-rows: 1fr;
          }
        `}
      </style>
    </>
  );
};
export default GridAccordeon;
