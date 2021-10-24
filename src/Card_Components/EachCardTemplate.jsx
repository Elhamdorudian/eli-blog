import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { allItems } from "../Data/AllData.jsx";
import Like from "../Like";
import "./EachCard.css";

const EachCardTemplate = () => {
    const { id } = useParams();
    return ( 

        <Card className="card-each card detail-card" key={allItems.id}>
        <Card.Body className="card-body-each detail-card-body">
        <div className="title-holder">
          <Card.Title className="each-card-title">
            {allItems[id].names}
            <div className="each-author">by Elham Dorudian / {allItems[id].date} </div>
            </Card.Title>
          <div className="detail-card-like">
            <Like />
          </div>
        </div>
              <Card.Img className="card-img-each detail-card-img" src={allItems[id].img} />
              <Card.Text className="each-text detail-card-text">{allItems[id].details}</Card.Text>
        </Card.Body>
    </Card>

     );
}
 
export default EachCardTemplate;