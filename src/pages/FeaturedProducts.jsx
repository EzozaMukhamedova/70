import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch(API_URL + "/products")
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Success" && Array.isArray(data.data)) {
          setProducts(data.data);
        } else {
          throw new Error("Bu Error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container w-full sm:w-[375px] lg:w-[1184px] px-4 mx-auto cursor-pointer">
      <h2 className="py-12 text-4xl font-bold text-left">Featured</h2>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={24}
        slidesPerView={5}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          375: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        loop={true}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="flex flex-col items-center">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-64 h-64"
              />
              {product.hot && (
                <span className="absolute px-2 py-1 text-xs font-bold text-white bg-red-500 rounded top-2 left-2">
                  HOT
                </span>
              )}
              {product.discount && (
                <span className="absolute px-2 py-1 text-xs font-bold text-white bg-green-500 rounded top-2 right-2">
                  -{product.discount}%
                </span>
              )}
            </div>
            <div className="flex items-center justify-between w-full px-2 mt-2">
              <div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500">${product.price}</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className="ml-2 text-xs text-gray-600">{product.rating}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProducts;
