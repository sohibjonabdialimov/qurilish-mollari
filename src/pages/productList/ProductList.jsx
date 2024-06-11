import "./productList.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import ProductTable from "../../components/productTable/ProductTable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer bg-slate-100">
        <ProductTable/>
      </div>
    </div>
  )
}

export default List