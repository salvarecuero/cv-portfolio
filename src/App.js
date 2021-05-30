import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GeistProvider, CssBaseline } from "@geist-ui/react";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import "./App.css";

function App() {
  const [themeType, setThemeType] = useState("dark");

  const toggleThemeType = () => {
    setThemeType((themeType) => (themeType === "dark" ? "light" : "dark"));
  };

  return (
    <Router>
      <GeistProvider themeType={themeType}>
        <CssBaseline />
        <TopBar theme={themeType} toggleTheme={toggleThemeType} />
        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </GeistProvider>
    </Router>
  );
}

export default App;
