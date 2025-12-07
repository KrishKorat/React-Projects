import useLocaleStorage from "./useLocalStorage";
import './theme.css';

export default function LightDarkMode() {

  const [theme, setTheme] = useLocaleStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
    // console.log(theme);
  }

  // console.log(theme);
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World!</p>
        <button onClick={handleToggleTheme}>Change theme</button>
      </div>
    </div>
  );  
}