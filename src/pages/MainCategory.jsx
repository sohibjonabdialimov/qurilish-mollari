import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosT } from "../services/api/axios";
import "./pages.scss";
import "./index.css";

const MainCategory = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  function fetchProducts() {
    axiosT.get("/admin/getAllCategory").then((response) => {
      console.log(response.data.allCategory);
      setData(response.data.allCategory);
    });
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="container">
      <div className="min-h-[90dvh] px-6 lg:px-32 mx-auto">
        <h1 className="common_title">Qurilish materiallari kategoriyalari</h1>

        <div className="relative category">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:pb-28 pb-10">
            {data.map((item) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/category/${item.id}`);
                  }}
                  key={item.id}
                  className="card cursor-pointer"
                >
                  <div className="card_wrapper">
                    <img src={item.categoryImage} alt="mountains" />
                    <div className="container p-3">
                      <p className="text-sm" href="#">
                        Qurilish materiallari kategoriyalari
                      </p>
                      <h2 className="text-lg">{item.categoryName}</h2>
                      <p>
                        Kategoriyadagi mahsulotlar soni: {item.productCount}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCategory;
