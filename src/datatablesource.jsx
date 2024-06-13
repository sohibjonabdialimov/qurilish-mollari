export const userColumns = [
  { field: "id", headerName: "ID", width: 340 },
  {
    field: "fullName",
    headerName: "Full Name",
    width: 200,
  },
  {
    field: "email",
    headerName: "Email",
    width: 280,
  },
  {
    field: "phoneNumber",
    headerName: "Phone number",
    width: 200,
  },
];
export const Product = [
  { field: "id", headerName: "ID", width: 340 },
  {
    field: "name",
    headerName: "Mahsulot nomi",
    width: 230,
    renderCell: (params) => {
      return (
        <div key={params.row.id} className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "price",
    headerName: "Narxi",
    width: 325,
  }];
export const Category = [
  { field: "id", headerName: "ID", width: 380 },
  {
    field: "categoryName",
    headerName: "Kategoriya nomi",
    width: 300,
    renderCell: (params) => {
      return (
        <div key={params.row.id} className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.categoryImage}
            alt="avatar"
          />
          {params.row.categoryName}
        </div>
      );
    },
  },
  {
    field: "productCount",
    headerName: "Mahsulotlar soni",
    width: 150,
  },
];
