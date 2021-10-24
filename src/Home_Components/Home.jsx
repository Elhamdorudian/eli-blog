import Jumbotron from "./jumbotron";
import "./HomeCards.scss";
import HomeCards from "./HomeCards.jsx";

const Homes = ({ cardExplainInfo }, index) => {
  return (
    <div className="homes" key={index}>
      <div className="jumbotron-holder">
        <Jumbotron />
      </div>
      <div className="homes-card">
        <HomeCards cardExplainInfo={cardExplainInfo} />
      </div>
    </div>
  );
};

export default Homes;
