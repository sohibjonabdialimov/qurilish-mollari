import "./table.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Category } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosT } from "../../services/api/axios";
import { ToastContainer, toast } from "react-toastify";

const CategoryTable = () => {
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

  const handleDelete = async (id) => {
    axiosT.delete(`/admin/deleteCategoryBy/${id}`).then((response) => {
      console.log(response);
      toast.info("Kategoriya o'chirildi", {
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
              onClick={() => handleDelete(params.row.uuid)}
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
       Qurilish kategoriyalari
        <Link to="/admin/categories/new" className="link">
          Kategoriya qo'shish
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={Category?.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default CategoryTable;
