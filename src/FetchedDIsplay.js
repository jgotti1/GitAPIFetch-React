import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function FetchedDIsplay({ userData }) {
  return (
    <div className="d-flex justify-content-center mt-3">
      <Card style={{ width: "33rem", border: "2px solid black", marginBottom: "50px" }}>
        <Card.Img variant="top" src={userData.avatar_url} className="avatar" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">Go to GitHub Account</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FetchedDIsplay;
