import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const navigate = useNavigate();
  const logoutFunc = () => {
    navigate("/admin/login");
    localStorage.removeItem("admin");
  };
  return (
    <div className="sidebar bg-slate-700">
      <div className="top">
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <span className="logo">Qurilish mollari</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Asosiy sahifa</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Asosiy sahifaga o'tish</span>
            </li>
          </Link>

          <p className="title">Admin sahifalari</p>
          <Link to="/admin/users" style={{ textDecoration: "" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Adminlar</span>
            </li>
          </Link>
          <Link to="/admin/categories" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Kategoriyalar</span>
            </li>
          </Link>
          <Link to="/admin/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Qurilish mahsulotlari</span>
            </li>
          </Link>
          <Link to="/admin/all_orders" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Buyurtmalar</span>
            </li>
          </Link>
          <p className="title">Logout</p>
          <li onClick={logoutFunc}>
            <ExitToAppIcon className="icon" />
            <span>Chiqish</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
