import "./productTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Product } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosT } from "../../services/api/axios";
import { ToastContainer, toast } from "react-toastify";

const ProductTable = () => {
  const [data, setData] = useState([]);

  function fetchProducts() {
    axiosT.get("/user/getAllProducts").then((response) => {
      console.log(response.data.allProducts);
      setData(response.data.allProducts);
    });
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    axiosT.delete(`/admin/deleteProductBy/${id}`).then((response) => {
      console.log(response);
      toast.info("Mahsulot o'chirildi", {
        position: "top-right",
      });
      fetchProducts();
    });
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
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
      <div className="datatableTitle">
        Qurilish mollarini ro'yxati
        <Link to="/admin/products/new" className="link">
          Qo'shish
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={Product?.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default ProductTable;
