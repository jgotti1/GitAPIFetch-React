import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FetchResponse from "./components/FetchResponse";
import FetchedDIsplay from "./components/FetchedDIsplay";
import UserForm from "./components/UserForm";
import ThemeToggle from "./components/ThemeToggle";
import { useEffect, useState } from "react";

const THEME_KEY = "theme";

function App() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState("");
  const [goodFetch, setGoodFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  // fetchStatus: "" | "notFound" | "rateLimited" | "error"
  const [fetchStatus, setFetchStatus] = useState("");
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return (
    <div className="App">
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <h1 className="title">Git Hub Account Search</h1>
      <UserForm
        userName={userName}
        setUserName={setUserName}
        setUserData={setUserData}
        userData={userData}
        setGoodFetch={setGoodFetch}
        loading={loading}
        setLoading={setLoading}
        fetchStatus={fetchStatus}
        setFetchStatus={setFetchStatus}
      />
      <FetchResponse userName={userName} goodFetch={goodFetch} loading={loading} fetchStatus={fetchStatus} />
      {goodFetch && <FetchedDIsplay userData={userData} />}
    </div>
  );
}

export default App;
