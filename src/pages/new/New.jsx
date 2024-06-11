import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useRef, useState } from "react";
import { axiosT } from "../../services/api/axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const New = ({ title }) => {
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const imgRef = useRef(null);
  const idRef = useRef(null);
  const starRef = useRef(null);
  const currentRef = useRef(null);
  const descRef = useRef(null);
  const featuresRef = useRef(null);
  const materialRef = useRef(null);
  const telephoneRef = useRef(null);
  const nameRef = useRef(null);

  const handleAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", nameRef.current.value);
    formData.append("price", currentRef.current.value);
    formData.append("description", descRef.current.value);
    formData.append("star", starRef.current.value);
    formData.append("img", imgRef.current.files[0]);
    formData.append("category_id", idRef.current.value);
    formData.append("features", featuresRef.current.value);
    formData.append("material", materialRef.current.value);
    formData.append("telephone", telephoneRef.current.value);
    axiosT
      .post("/admin/createProduct", formData)
      .then((res) => {
        console.log(res.data);
        toast.info("Mahsulot yaratildi", {
          position: "top-right",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Xatolik yuz berdi", {
          position: "top-right",
        });
      });
  };

  return (
    <div className="new1">
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
      <div className="newContainer">
        <div className="top">
          <h1 className="pt-5 pl-5">{title}</h1>
        </div>
        <div className="bottom1">
          <div className="right1">
            <form onSubmit={handleAdd}>
              <div className="formInput">
                <div className="img">
                  <div className="left1">
                    <img
                      src={
                        file
                          ? URL.createObjectURL(file)
                          : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                      }
                      alt=""
                    />
                  </div>
                  <label htmlFor="file">
                    Rasm: <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    ref={imgRef}
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>
              </div>

              <div className="formInput">
                <label>Kategoriya ID si</label>
                <input type="text" ref={idRef} placeholder="id" />
              </div>
              <div className="formInput">
                <label>Mahsulot nomi</label>
                <input type="text" ref={nameRef} placeholder="Mix" />
              </div>
              <div className="formInput">
                <label>Narxi</label>
                <input type="number" ref={currentRef} placeholder="1100000" />
              </div>
              <div className="formInput">
                <label>Bahosi</label>
                <input type="text" ref={starRef} placeholder="5" />
              </div>
              <div className="formInput">
                <label>Materiali</label>
                <input type="text" ref={materialRef} placeholder="Temir" />
              </div>
              <div className="formInput">
                <label>Tel raqami</label>
                <input type="number" ref={telephoneRef} placeholder="+998976367975" />
              </div>
              <div className="formInput">
                <label>Xususiyati</label>
                <input
                  type="text"
                  ref={featuresRef}
                  placeholder="lorem ipsum"
                />
              </div>
              <button type="submit">Qo'shish</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
