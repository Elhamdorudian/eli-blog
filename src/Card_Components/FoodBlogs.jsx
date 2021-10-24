import "./FoodBlogs.css"
import FilterItems from "./BlogCardTemplates.jsx";
const FoodBlogs = () => {
  return (
    <div className="cards-holder">
      <div className="jumbotron food-jumbotron">
        <div className="holder"></div>
      </div>
      <div className="row detail-row">
       <FilterItems type="food"/>
      </div>
    </div>
  );
};

export default FoodBlogs;

