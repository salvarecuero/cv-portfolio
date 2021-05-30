import React, { useState, useRef, useEffect } from "react";
import { Row, Button, Loading } from "@geist-ui/react";
import { useHistory } from "react-router-dom";
import "./styles/GoToButton.css";

function GoToPortfolioButton({ to, children }) {
  const [loading, setLoading] = useState(false);
  const timerToGo = useRef(null);

  const history = useHistory();

  function goTo() {
    setLoading(true);
    timerToGo.current = setTimeout(() => history.push(to), 250);
  }

  useEffect(() => {
    return clearTimeout(timerToGo.current);
  }, []);

  return (
    <Row className="goToButtonRow" justify="center">
      <Button onClick={() => goTo()} className="goToButton">
        {loading ? (
          <Loading size="large" width="100%" height="100%" />
        ) : (
          children
        )}
      </Button>
    </Row>
  );
}

export default GoToPortfolioButton;
