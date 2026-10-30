import { Container, Form, Button, ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react";

const HISTORY_KEY = "githubSearchHistory";
const HISTORY_LIMIT = 5;
const DEBOUNCE_DELAY_MS = 700;

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
  } catch {
    return [];
  }
}

function addToHistory(name) {
  const existing = getHistory().filter((entry) => entry.toLowerCase() !== name.toLowerCase());
  const updated = [name, ...existing].slice(0, HISTORY_LIMIT);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
  return updated;
}

function UserForm({ setUserName, userName, setUserData, setGoodFetch, loading, setLoading, setFetchStatus }) {
  const [history, setHistory] = useState(getHistory);

  const fetchUser = async (name) => {
    if (!name.trim()) return;

    setLoading(true);
    setFetchStatus("");
    setGoodFetch(false);

    try {
      const response = await fetch(`https://api.github.com/users/${name}`);

      if (!response.ok) {
        setFetchStatus(response.status === 403 ? "rateLimited" : "notFound");
        setUserData("");
        return;
      }

      const responseData = await response.json();
      console.log(responseData);
      setUserData(responseData);
      setGoodFetch(true);
      setHistory(addToHistory(name));
    } catch {
      setFetchStatus("error");
      setUserData("");
    } finally {
      setLoading(false);
    }
  };

  // Debounced live search: fetch automatically a short while after typing stops.
  useEffect(() => {
    if (!userName.trim()) return;

    const timeoutId = setTimeout(() => fetchUser(userName), DEBOUNCE_DELAY_MS);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser(userName);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setGoodFetch(false);
    setFetchStatus("");
    setUserData("");
    setUserName("");
  };

  const handleHistoryClick = (name) => {
    setUserName(name);
    fetchUser(name);
  };

  const handleClearHistory = () => {
    localStorage.removeItem(HISTORY_KEY);
    setHistory([]);
  };

  return (
    <>
      <Container className="col-md-2 formContainer">
        <Form>
          <Form.Group>
            <Form.Label>Account User Name</Form.Label>
            <Form.Control type="text" placeholder="User Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
          </Form.Group>
          <Button className="m-3 btn-sm border border-dark buttons" variant="primary" type="submit" onClick={handleSubmit} disabled={loading}>
            Submit
          </Button>
          <Button className="m-3 btn-sm border border-dark buttons" variant="danger" type="button" onClick={handleClear}>
            -Clear-
          </Button>
        </Form>

        {history.length > 0 && (
          <div className="historyBlock mt-3">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <Form.Label className="mb-0">Recent Searches</Form.Label>
              <Button variant="outline-danger" size="sm" onClick={handleClearHistory}>
                Clear Recent Searches
              </Button>
            </div>
            <ListGroup>
              {history.map((name) => (
                <ListGroup.Item action key={name} onClick={() => handleHistoryClick(name)}>
                  {name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        )}
      </Container>
    </>
  );
}

export default UserForm;
