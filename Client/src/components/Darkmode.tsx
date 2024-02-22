import { useState } from "react";

function Darkmode() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className={"bg-white dark:bg-slate-700 h-full w-full absolute"}>
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        {/* Rest of your components */}
      </div>
    </div>
  );
}

export default Darkmode;
