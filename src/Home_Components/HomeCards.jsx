import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./HomeCards.scss";
import foodImg from "../images/food_1.jpg";
import lifeImg from "../images/life_1.jpg";
import exerciseImg from "../images/exercise_1.jpg";
const HomeCards = ({ cardExplainInfo }) => {


/*
---------------------------------------------------------
                     -----Images-----
---------------------------------------------------------
*/
  const cardInfo = [foodImg, lifeImg, exerciseImg];

  const renderCard = (card, index) => {
    return (
      <Card className="home-card" key={index}>
        <Card.Body className="home-card-body">
          <Card.Img className="home-card-img" src={card} />
        </Card.Body>
      </Card>
    );
  };

/*
---------------------------------------------------------
                 -----Explanations-----
---------------------------------------------------------
*/

  const renderCardE = (card, index) => {
    return (
      <div>
        <Card className="home-card-holder" key={index}>
          <Card.Body className="home-card-body-inner">
            <Card.Title className="home-card-title">{card.title}</Card.Title>
            <Card.Text className="home-card-text">{card.text}</Card.Text>
            <Button className="home-card-btn btn btn-block">
              <Link className="home-cards-link" to={card.link}>
                Read More
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  };

  const rOne = cardInfo.map(renderCard);
  const rTwo = cardExplainInfo.map(renderCardE);

  return (
    <div className="home-card-template g-wrapper">
      <div className="one">{rOne[0]}</div>
      <div className="two">{rTwo[0]}</div>
      <div className="three">{rTwo[1]}</div>
      <div className="four">{rOne[1]}</div>
      <div className="five">{rOne[2]}</div>
      <div className="six">{rTwo[2]}</div>
    </div>
  );
};

export default HomeCards;
