import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const REPOS_TO_SHOW = 5;

function FetchedDIsplay({ userData }) {
  const [repos, setRepos] = useState([]);
  const [reposLoading, setReposLoading] = useState(false);
  const [reposError, setReposError] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      setReposLoading(true);
      setReposError(false);

      try {
        const response = await fetch(`${userData.repos_url}?sort=updated&per_page=${REPOS_TO_SHOW}`);
        if (!response.ok) {
          setReposError(true);
          return;
        }
        setRepos(await response.json());
      } catch {
        setReposError(true);
      } finally {
        setReposLoading(false);
      }
    };

    if (userData.repos_url) fetchRepos();
  }, [userData.repos_url]);

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

          {reposLoading && <p className="card-text mt-3">Loading recent repositories...</p>}
          {reposError && <p className="card-text mt-3">Couldn't load this user's repositories.</p>}
          {!reposLoading && !reposError && repos.length > 0 && (
            <>
              <p className="card-text mt-3 mb-1">Most recently updated repositories:</p>
              <ListGroup>
                {repos.map((repo) => (
                  <ListGroup.Item key={repo.id}>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      {repo.name}
                    </a>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default FetchedDIsplay;
