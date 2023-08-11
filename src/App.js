import "./App.css";
import FetchResponse from "./components/FetchResponse";
import FetchedDIsplay from "./components/FetchedDIsplay";
import UserForm from "./components/UserForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState("");
  const [goodFetch, setGoodFetch] = useState(false);

  return (
    <div className="App">
      <h1 className="title">Git Hub Account Search</h1>
      <UserForm userName={userName} setUserName={setUserName} setUserData={setUserData} userData={userData} setGoodFetch={setGoodFetch} />
      <FetchResponse userName={userName} userData={userData} goodFetch={goodFetch} />
      {goodFetch && <FetchedDIsplay userData={userData} />}
    </div>
  );
}

export default App;
