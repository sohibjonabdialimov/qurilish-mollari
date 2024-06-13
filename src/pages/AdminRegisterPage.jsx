import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { axiosT } from "../services/api/axios";
import { ToastContainer, toast } from "react-toastify";
const { TextArea } = Input;
const AdminRegisterPage = () => {
  const {
    control,
    getValues,
    reset: BranchReset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const submitHandler = () => {
    const data = getValues().REGISTER;
    console.log(data);
    axiosT
      .post("/admin/auth/signup", data)
      .then((response) => {
        console.log(response);
        localStorage.setItem("user_data", JSON.stringify(response.data.data));
        navigate("/admin/users");
      })
      .catch((err) => {
        console.log(err);
        if(err.response.data.error === "Email already exists"){
          toast.error("Bu email bilan oldin ro'yxatdan o'tgansiz", {
            position: "top-right",
          });
        }else{
          toast.error("Xatolik yuz berdi", {
            position: "top-right",
          });
        }
      });
  };
  return (
    <div className="container">
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
      <div className="min-h-[90dvh] px-6 lg:px-32 mx-auto">
        <h1 className="common_title mb-4">Ro'yxatdan o'tish</h1>
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
                name="REGISTER.fullName"
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
                name="REGISTER.phoneNumber"
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
            <Form.Item className="font-semibold" label="Email">
              <Controller
                rules={{
                  required: "Field is required",
                }}
                control={control}
                name="REGISTER.email"
                render={({ field }) => {
                  return (
                    <>
                      <Input
                        {...field}
                        type="email"
                        placeholder="kimdur@gmail.com"
                        className="w-full p-3 rounded-[10px]"
                      />
                    </>
                  );
                }}
              />
            </Form.Item>
            <Form.Item className="font-semibold" label="Parol">
              <Controller
                rules={{
                  required: "Field is required",
                }}
                control={control}
                name="REGISTER.password"
                render={({ field }) => {
                  return (
                    <>
                      <Input
                        {...field}
                        type="password"
                        placeholder="********"
                        className="w-full p-3 rounded-[10px]"
                      />
                    </>
                  );
                }}
              />
            </Form.Item>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-custom_color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-custom_color_hover"
            >
              Ro'yxatdan o'tish
            </button> 
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AdminRegisterPage;
