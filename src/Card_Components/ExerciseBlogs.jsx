import FilterItems from "./BlogCardTemplates.jsx";
const ExerciseBlogs = () => {
  return (
    <div className="cards-holder">
      <div className="jumbotron exercise-jumbotron">
        <div className="holder"></div>
      </div>
      <div className="row detail-row">
       <FilterItems type="exercise"/>
      </div>
    </div>
  );
};

export default ExerciseBlogs;