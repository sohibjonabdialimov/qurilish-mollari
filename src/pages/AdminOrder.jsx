import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { axiosT } from "../services/api/axios";
const AdminOrder = () => {
  const [data, setData] = useState([]);

  function fetchProducts() {
    axiosT.get("/admin/getAllOrders").then((response) => {
      setData(response.data.data);
      console.log(response.data.data);
    });
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer bg-slate-100">
        <div className="listContainer">
          <div className="listTitle">Barcha buyurtmalar</div>
          <div className="wrap">
            {data.map((item, index) => {
              return (
                <div key={item.uuid} className="wrap_item">
                  <div className="index">
                    <b>{index + 1}.</b>
                  </div>
                  <div className="info">
                    <h2>
                      <b>Ism:</b> {item.fullName}
                    </h2>
                    <p>
                      <b>Email:</b> {item.email}
                    </p>
                    <p>
                      <b>Xabar:</b> {item.commets}
                    </p>
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

export default AdminOrder;
