import React from "react";
import { Location1, Location2, Location3 } from "../assets/location";

const Location = () => {
  return (
    <div className="sm:p-24 p-8 pb-10">
      <h1 className="text-#1F2937 text-[26px] sm:text-4xl sm:mb-12 mb-4 sm:font-semibold font-bold">
        Bizning manzilimiz va aloqa
      </h1>
      <p className="sm:w-3/4 w-[100%] text-lg leading-8 text-justify sm:text-start">
        Bizning manzilimizga tashrif buyurib bundan ham ortiq qurilish mahsulotlarini ko'rishingiz mumkin
      </p>
      <div className="map_wrap my-5 sm:my-0">
        <div>
          <h2 className="font-bold text-xl">Manzil:</h2>
          <p>100070, Тоshkent shahar, Tafakkur ko'chasi, 68 a</p>
        </div>
        <div>
          <h2 className="font-bold text-xl">Ishonch telefoni:</h2>
          <p>(+998 71) 252-20-65</p>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15103.379062707167!2d69.26010001338891!3d41.31125615676219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1718113419538!5m2!1sru!2s" width="100%" height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

    </div>
  );
};

export default Location;
