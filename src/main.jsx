import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import "./index.css";

const Index = () => {
  const [loading, setLoading] = useState(true);

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
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="radialreveal">
          <Navbar />
          <App />
        </div>
      )}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Index />);