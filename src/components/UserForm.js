import { Container, Form, Button } from "react-bootstrap";

function UserForm({ setUserName, userName, setUserData, setGoodFetch }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    //Get GitHub Data
    const response = await fetch(`https://api.github.com/users/${userName}`);
    if (!response.ok) {
      setUserData('notFound');
      return;
    }
    const responseData = await response.json();
    setUserData(responseData);
    setGoodFetch(true)
    console.log(responseData);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setGoodFetch(false);
    setUserData("")
    setUserName("");
  };

  return (
    <>
      <Container className="col-md-2 formContainer">
        <Form>
          <Form.Group>
            <Form.Label>Account User Name</Form.Label>
            <Form.Control type="text" placeholder="User Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
          </Form.Group>
          <Button className="m-3 btn-sm border border-dark buttons" variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
          <Button className="m-3 btn-sm border border-dark buttons" variant="danger" type="button" onClick={handleClear}>
            -Clear-
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default UserForm;
