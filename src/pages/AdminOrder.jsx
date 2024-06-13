import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { axiosT } from "../services/api/axios";
import { ToastContainer, toast } from "react-toastify";
const AdminOrder = () => {
  const [data, setData] = useState([]);

  function fetchProducts() {
    axiosT.get("/admin/getUserMessage").then((response) => {
      setData(response.data.msg);
      console.log(response.data);
    });
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  function deleteOrder(id){
    axiosT.delete("/admin/deleteMessageBy/" + id).then((response) => {
      console.log(response);
      toast.info("Buyurtma o'chirildi", {
        position: "top-right",
      });
      fetchProducts();
    }).catch((err) => {
      toast.error("Xatolik yuz berdi", {
        position: "top-right",
      });
    });
  }
  return (
    <div className="home">
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
      <Sidebar />
      <div className="homeContainer bg-slate-100">
        <div className="listContainer">
          <div className="listTitle">Barcha buyurtmalar</div>
          <div className="wrap">
            {data.map((item, index) => {
              return (
                <div key={item.id} className="wrap_item relative">
                  <div className="index">
                    <b>{index + 1}.</b>
                  </div>
                  <div className="info">
                    <h2>
                      <b>Ism:</b> {item.customer_name}
                    </h2>
                    <p>
                      <b>Tel raqami:</b> {item.customer_phone}
                    </p>
                    <p>
                      <b>Manzili:</b> {item.message}
                    </p>
                    <p>
                      <b>Mahsulot ID si:</b> {item.product_id}
                    </p>
                    <p>
                      <b>Buyurtma beruvchi ID si:</b> {item.user_id}
                    </p>
                  </div>

                  <button onClick={() => {deleteOrder(item.id)}} className="bg-custom_color absolute text-white rounded-md py-2 px-3 right-3 top-3">O'chirish</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrder;
