import FilterItems from "./BlogCardTemplates.jsx";
const InterestsBlogs = () => {
  return (
    <div className="cards-holder">
      <div className="jumbotron interests-jumbotron">
        <div className="holder"></div>
      </div>
      <div className="row detail-row">
       <FilterItems type="life"/>
      </div>
    </div>
  );
};

export default InterestsBlogs;

