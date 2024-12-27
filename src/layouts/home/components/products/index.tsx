import clsx from "clsx";
import Slider from "react-slick";

import { useWindowResize } from "@/hooks";

import { ProductsItemI } from "../../declare";
import { ProductItem } from "./item";

export const Products = ({ products }: { products: ProductsItemI[] }) => {
  const { isMobileDevice } = useWindowResize();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };

  if (isMobileDevice) {
    return (
      <div className="multiple-product overflow-hidden pb-12">
        <Slider
          {...settings}
          className="slider"
        >
          {products.map((product, index) => (
            <ProductItem
              key={index}
              product={product}
            />
          ))}
        </Slider>
      </div>
    )
  }

  return (
    <div className={clsx('multiple-product sm:px-5 !grid !grid-cols-2 md:!grid-cols-1', !isMobileDevice && '!grid !grid-cols-2')}>
      {products.map((product, index) => (
        <ProductItem
          key={index}
          product={product}
        />
      ))}
    </div>
  );
};
