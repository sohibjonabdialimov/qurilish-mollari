import React from "react";
import { useEffect, useState } from "react";
import { formatPrice } from "../utils/formatPrise";
import { Link } from "react-router-dom";
import { Button, Dropdown, Space } from 'antd';
import { axiosT } from "../services/api/axios";
import "./pages.scss";
const Furniture = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axiosT
      .get(`/admin/getCategoryBy/${window.location.pathname.split("/")[2]}`)
      .then((res) => {
        console.log(res.data.getCategoryById);
        setData(res.data.getCategoryById);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const items = [
    {
      key: '1',
      label: (
        <p>
          1. qurilish@gmail.com
        </p>
      ),
    },
    {
      key: '2',
      label: (
        <p>
          2. +998977787878
        </p>
      ),
    },
    {
      key: '3',
      label: (
        <p>
          3. +998977787879
        </p>
      ),
    },
  ];
  return (
    <div className="container">
      <div className="min-h-[90dvh] px-6 lg:px-32 mx-auto">
        <h1 className="common_title">{data.categoryName}</h1>
        <div className="furniture_wrap">
          {data.Products?.length ? (
            data.Products.map((item) => {
              return (
                <div key={item.id} class="card1">
                  <div class="card-img-container">
                    <div class="card-img">
                      <img src={item.img} alt="" />
                      <span class="date">{formatPrice(item.price)} so'm</span>
                      <h1>{item.name}</h1>
                    </div>
                  </div>
                  <div class="card-body">
                    <p>
                      <b>Be who you want to be</b>
                      You don’t have to be in "a box". Let go of your imagined
                      self-concept. Who you really are cannot be defined. Forget
                      what you think you are.
                    </p>
                    <div class="card-link">
                      <Dropdown
                        menu={{
                          items,
                        }}
                        className="cursor-pointer"
                        placement="bottom"
                      >
                        <p className="p-2 bg-slate-900 text-white text-center rounded-md">Bog'lanish uchun</p>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1 className="w-full text-2xl">
              Kategoriyaga mahsulot qo'shilmagan
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Furniture;
{
  /* <Link
className="newsCaption-link"
to={`/furnitures/${item.uuid}`}
>
Batafsil
</Link> */
}
{
  /* <div onClick={() => {navigate(`/furnitures/${item.id}`)}} key={item.id} className="furniture_item cursor-pointer">
<div className="furniture_img">
  <img src={item.img} alt="" />
  {false ? (
    <img src={fill_heart} alt="" />
  ) : (
    <img src={heart} alt="" />
  )}
  <img onClick={() => addBacketFunction()} src={basket} alt="" />
</div>
<div className="furniture_content">
  <h3>{item.category}</h3>
  <p>
    <span>Nomi: </span>
    {item.name}
  </p>
  <p>
    <span>Narxi: </span>
    {item.price}
  </p>
  <p>
    <span>Qolgan mahsulotlar soni: </span>
    {item.count}
  </p>
</div>
</div> */
}
