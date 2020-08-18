import React from "react";
import { Button, Card } from "react-bootstrap";
import "../netflix.css";
import "../App.css";
function Cards({ name }) {
  const item = [];
  return (
    <div style={{ margin: "5px 5px 5px 5px" }} className="col-md-3 box">
      {console.log(name)}

      {name.map((place, index) => (
        <Card className="card" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Text>
              <h3>{place.name}</h3>
              <br />
              {place.business_status}
              <br />
              {place.formatted_address}
              <br />
              <h4>{place.rating}</h4>
              <br />
              <h4>{place.user_ratings_total}</h4>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Cards;
