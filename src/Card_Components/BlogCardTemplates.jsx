import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Like from "../Like";
import { allItems } from "../Data/AllData.jsx";

/*
---------------------------------------------------------
                    Filtering-Data
---------------------------------------------------------
*/
const BlogCardTemplates = ({type}) => {
  const filteredItems = allItems.filter((item) => {
    if (item.type === type) 
      {return item;}
      return false;
   
  });
  console.log(allItems[1].link)

  const renderItems = (item) => {
    return (<Card className="col-12 col-sm-6 col-md-4 detail-card" key={item.id}>
    <Card.Body className="detail-card-body">
      <Button className="detail-card-btn btn btn-block">
        <Link className="detail-card-link" to={`${item.link}${item.id}`}>
          <Card.Img className="detail-card-img" src={item.img} />
        </Link>
      </Button>
      <Card.Title className="detail-card-title">
        {item.names}
        <div className="detail-card-like">
          <Like />
        </div>
      </Card.Title>
      <Card.Text className="detail-card-text">{item.author}</Card.Text>
    </Card.Body>
  </Card>)
  };

  return (filteredItems.map(renderItems))
};

export default BlogCardTemplates;
