import React from "react";
import s from "./simple-card.module.css";
import classnames from "classnames";

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
    <div className={classnames(s.container)}>
      <div className="page-inner">
        <div className={s.elWrapper}>
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
