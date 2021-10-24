import { useParams } from "react-router-dom";
import Ingredients from "./Ingredients";
import {allItems} from "../Data/AllData.jsx";
import EachCardTemplate from "./EachCardTemplate";

const EachFood = () => {
  const { id } = useParams();
  return (
      <div className="each-holder">
        <EachCardTemplate/>
        <Ingredients allItems={allItems} id={id}/>
      </div>
  );
};

export default EachFood;
