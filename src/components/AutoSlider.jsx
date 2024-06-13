import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { axiosT } from "../services/api/axios";
import { formatPrice } from "../utils/formatPrise";
const AutoSlider = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axiosT
      .get("/admin/getAllCategory")
      .then((res) => {
        console.log(res.data.allCategory);
        setData(res.data.allCategory);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="sm:p-24 p-8 pb-5">
      <h1 className="text-#1F2937 text-[26px] sm:text-4xl sm:mb-12 mb-4 sm:font-semibold font-bold">
        Bizdagi qurilish mahsulotlari to'plami
      </h1>
      <Swiper
        spaceBetween={20}
        grabCursor={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        className="mySwiper mt-5 sm:mt-0 rounded-2xl"
      >
        {data.map((item) => {
          return (
            <SwiperSlide
              onClick={() => {
                navigate(`/category/${item.id}`);
              }}
              key={item.id}
            >
              <div className="autoslider_wrap">
                <div className="autoslider_img">
                  <img
                    className="w-[100%] rounded-2xl"
                    src={item.categoryImage}
                    alt=""
                  />
                </div>
                <div className="autoslider_content">
                  <h3>{item.categoryName}</h3>
                  <div>
                    <p>Mahsulotlar soni {item.productCount} ta</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default AutoSlider;
