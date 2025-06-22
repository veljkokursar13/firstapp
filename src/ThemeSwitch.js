// ThemeSwitch.js
function ThemeSwitch({ theme, setTheme }) {
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className="switch-wrapper">
      <input
        type="checkbox"
        id="neon-switch"
        className="neon-input"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <label htmlFor="neon-switch" className="neon-slider">
        <span className="circle"></span>
      </label>
    </div>
  );
}
export default ThemeSwitch;