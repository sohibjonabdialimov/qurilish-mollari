import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosT } from "../../services/api/axios";

const Datatable = () => {
  const [data, setData] = useState([]);

  function fetchProducts() {
    axiosT
      .get("/getAdmins")
      .then((response) => {
        console.log(response);
        setData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    axiosT.delete(`/adminDelete/${id}`).then((response) => {
      console.log(response);
      toast.info("Admin o'chirildi", {
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
      <div className="datatableTitle">
        Adminlar ro'yxati
        <Link to="/admin/users/add" className="link">
          Admin qo'shish
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns?.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default Datatable;
