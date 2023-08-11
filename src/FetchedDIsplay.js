import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function FetchedDIsplay({ userData }) {
  return (
    <div className="d-flex justify-content-center mt-3">
      <Card style={{ width: "33rem", border: "2px solid black", marginBottom: "50px" }}>
        <Card.Img variant="top" src={userData.avatar_url} className="avatar" />
        <Card.Body>
          <Card.Title className="card-title">
            <h3>
              GitGub User Name: <p>{userData.login}</p>
            </h3>
          </Card.Title>
          <Card.Text>
            <p className="card-text">
              This GitHub user has <strong>{userData.public_repos}</strong> repositories
              <br />
              click on the link below to check out their work.
            </p>
          </Card.Text>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            <Button className="buttons" size="sm" variant="primary">
              Go to GitHub Account
            </Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FetchedDIsplay;
