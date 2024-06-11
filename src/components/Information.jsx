import React from "react";
import main from "../assets/main.jpeg";
const Information = () => {
  return (
    <div className="sm:p-24 p-8 pb-8">
      <h1 className="text-#1F2937 text-[26px] sm:text-4xl sm:mb-12 mb-4 sm:font-semibold font-bold">
        Onlayn mebel do'koni qulayliklari
      </h1>
      <div className="w-[100%] flex flex-col sm:flex-row gap-5 mt-5">
        <div className="sm:w-1/2 w-[100%] rounded">
          <img className="w-[100%] rounded" src={main} alt="" />
        </div>
        <p className="text-lg leading-8 text-justify sm:w-1/2 w-[100%]">
          Bizning qurilish materiallari sanoati korxonalari uyushmasi qurilish
          materiallarining barcha turlarini: sement, ohak, gips, devorbop, tom
          yopgich, suv o'tkazmaydigan va issiqlikni saqlovchi materiallarni -
          100 hildan ortiq asosiy qurilish mahsulotlaridan to'liq foydalanishni
          ta'minlaydi. Yangi qurilish yoki ta'mirlash loyihasini boshlayapsizmi,
          biz sizga kerak bo'lgan barcha qurilish materiallarini
          to'g'ridan-to'g'ri qurilish maydonchangizga etkazib beramiz. Qum,
          sement va g'ishtdan tortib, izolyatsiya, gipsokarton va
          plitkalargacha, biz sizga kerak bo'lgan hamma narsani ta'minlay
          olamiz. Assortimentdagi qurilish materiallaridan tashqari, biz har
          qanday qurilish ishlari uchun turli xil asboblar va aksessuarlarni
          taklif etamiz. Matkaplar, tornavidalar va burchakli tegirmonlar kabi
          elektr asboblardan himoya ko'zoynaklari, qo'lqoplar va etiklargacha
          ishni xavfsiz va samarali bajarishingiz uchun kerak bo'lgan hamma
          narsani taqdim etamiz. Xavfsizligingizni xavf ostiga qo'ymang - bugun
          yuqori sifatli asboblar, bardoshli ish kiyimi va xavfsizlik
          uskunalariga sarmoya kiriting va ishni to'g'ri bajaring.
        </p>
      </div>
    </div>
  );
};

export default Information;
