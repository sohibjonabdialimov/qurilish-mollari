import React from "react";
import { useEffect, useState } from "react";
import { formatPrice } from "../utils/formatPrise";
import { Link } from "react-router-dom";
import { Button, Dropdown, Modal, Space } from "antd";
import { Controller, useForm } from "react-hook-form";
import { Form, Input } from "antd";
import { axiosT } from "../services/api/axios";
import "./pages.scss";
import { ToastContainer, toast } from "react-toastify";
const { TextArea } = Input;
const Furniture = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const {
    control,
    getValues,
    reset: BranchReset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    axiosT
      .get(`/admin/getCategoryBy/${window.location.pathname.split("/")[2]}`)
      .then((res) => {
        setData(res.data.getCategoryById);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const items = [
    {
      key: "1",
      label: <p>1. qurilish@gmail.com</p>,
    },
    {
      key: "2",
      label: <p>2. +998(91) 451-95-73</p>,
    },
    {
      key: "3",
      label: <p>3. +998(97) 778-78-79</p>,
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    submitHandler();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  function orderFunc(id) {
    setId(id);
    setIsModalOpen(true);
  }
  const submitHandler = () => {
    const data = getValues().ORDER;
    data.user_id = JSON.parse(localStorage.getItem("user_id")) || "";
    data.product_id = id;
    axiosT
      .post("/user/addMessage", data)
      .then((response) => {
        toast.info(
          "Buyurtma qabul qilindi. Xodimlarimiz siz bilan tez orada bog'lanadi",
          {
            position: "top-right",
          }
        );
        BranchReset();
        setIsModalOpen(false);
      })
      .catch((err) => {
        if(err.response.status == 400){
          toast.error(
            "Buyurtma berishdan oldin ro'yxatdan o'ting",
            {
              position: "top-right",
            }
          );
        }else{
          toast.error(
            "Buyurtmada xatolik yuz berdi",
            {
              position: "top-right",
            }
          );
        }
      });
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container">
        <div className="min-h-[90dvh] px-6 lg:px-32 mx-auto text-black">
          <h1 className="common_title">{data.categoryName}</h1>
          <div className="furniture_wrap">
            {data.Products?.length ? (
              data.Products.map((item) => {
                return (
                  <div key={item.id} class="card1">
                    <div class="card-img-container">
                      <div class="card-img">
                        <img src={item.img} alt="" />
                      </div>
                    </div>
                    <div class="card-body border-2 border-b-slate-300">
                      <p>
                        <b className="font-bold text-xl">{item.name}</b>
                        {item.description}
                      </p>
                      <p className="font-bold text_prise">
                        {formatPrice(item.price)} so'm
                      </p>
                      <button
                        onClick={() => orderFunc(item.id)}
                        className="border p-2 text-slate-900 text-center rounded-md mb-2"
                      >
                        Buyurtma berish
                      </button>
                      <div class="card-link">
                        <Dropdown
                          menu={{
                            items,
                          }}
                          className="cursor-pointer"
                          placement="bottom"
                        >
                          <p className="p-2 bg-slate-900 text-white text-center rounded-md">
                            Bog'lanish uchun
                          </p>
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

      <Modal
        okText="Buyurtma berish"
        cancelText="Bekor qilish"
        title="Buyurtma berish uchun formani to'ldiring"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          layout="vertical"
          className="mb-10 sm:w-[400px] w-[100%] mx-auto"
          onSubmitCapture={(e) => {
            e.preventDefault();
            submitHandler();
          }}
        >
          <div className="grid grid-cols-1">
            <Form.Item className="font-semibold" label="Ism-familiya">
              <Controller
                rules={{
                  required: "Field is required",
                }}
                control={control}
                name="ORDER.customer_name"
                render={({ field }) => {
                  return (
                    <>
                      <Input
                        {...field}
                        placeholder="Alisher Qodirov"
                        className="w-full p-3 rounded-[10px]"
                      />
                    </>
                  );
                }}
              />
            </Form.Item>
            <Form.Item className="font-semibold" label="Telefon raqam">
              <Controller
                rules={{
                  required: "Field is required",
                }}
                control={control}
                name="ORDER.customer_phone"
                render={({ field }) => {
                  return (
                    <>
                      <Input
                        {...field}
                        type="number"
                        placeholder="+998976367574"
                        className="w-full p-3 rounded-[10px]"
                      />
                    </>
                  );
                }}
              />
            </Form.Item>
            <Form.Item className="font-semibold" label="To'liq manzil">
              <Controller
                rules={{
                  required: "Field is required",
                }}
                control={control}
                name="ORDER.message"
                render={({ field }) => {
                  return (
                    <>
                      <TextArea
                        {...field}
                        placeholder="Toshkent shahar, Yunusobod tumani, Amir Temur ko'chasi, 102-uy"
                        className="w-full p-3 rounded-[10px]"
                      />
                    </>
                  );
                }}
              />
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </>
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
