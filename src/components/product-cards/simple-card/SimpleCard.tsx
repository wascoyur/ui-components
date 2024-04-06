import React from "react";
import "./simple-card.scss";

type ProductCardProps = {
  name: string;
  company: string;
  price: number;
  sizes: string[];
  imageSrc: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  company,
  price,
  sizes,
  imageSrc,
}: ProductCardProps) => {
  return (
    <div className="container page-wrapper">
      <div className="page-inner">
        <div className="el-wrapper">
          <div className="box-up">
            <img className="img" src={imageSrc} alt={name} />
            <div className="img-info">
              <div className="info-inner">
                <span className="p-name">{name}</span>
                <span className="p-company">{company}</span>
              </div>
              <div className="a-size">
                Available sizes :{" "}
                <span className="size">{sizes.join(", ")}</span>
              </div>
            </div>
          </div>

          <div className="box-down">
            <div className="h-bg">
              <div className="h-bg-inner"></div>
            </div>
            <a className="cart" href="#">
              <span className="price">${price}</span>
              <span className="add-to-cart">
                <span className="txt">Add in cart</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
