import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import "./index.css";

const Index = () => {
  const [loading, setLoading] = useState(true);

  // The useEffect hook in React handles side effects in functional components, here is used to set a timeout to change the loading state after 4.5 seconds.
  useEffect(() => {
    const loadingScreenTimeout = setTimeout(() => {
      setLoading(false);
    }, 4500);

    return () => {
      clearTimeout(loadingScreenTimeout);
    };
  }, []);

  return (
    <React.StrictMode>
      {/* Conditional rendering of the app right after the loading state is changed */}
      {loading ? (
        <LoadingScreen />
      ) : (
        // radialreveal is the class for the animation
        <div className="radialreveal">
          <Navbar />
          <App />
        </div>
      )}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Index />);