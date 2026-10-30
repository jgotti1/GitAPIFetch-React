import { ButtonGroup, Button } from "react-bootstrap";

function ThemeToggle({ theme, setTheme }) {
  return (
    <ButtonGroup className="theme-toggle">
      <Button variant={theme === "light" ? "primary" : "outline-primary"} size="sm" onClick={() => setTheme("light")}>
        ☀ Light
      </Button>
      <Button variant={theme === "dark" ? "primary" : "outline-primary"} size="sm" onClick={() => setTheme("dark")}>
        🌙 Dark
      </Button>
    </ButtonGroup>
  );
}

export default ThemeToggle;
