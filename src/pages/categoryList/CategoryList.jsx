import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import CategoryTable from "../../components/categorytable/CategoryTable"

const CategoryList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer bg-slate-100">
        <CategoryTable/>
      </div>
    </div>
  )
}

export default CategoryList