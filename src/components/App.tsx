import React from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import { Di } from "../pages/Di"
import { Home } from "../pages/Home"
import styled from "styled-components"
import { Link } from "../theme/Link"
import { Nav } from "../theme/Nav"

export const App = () => {
  return (
    <Router>
      <Container>
        <Nav>
          <Link to="/" exact>
            Главная
          </Link>
          <Link to="/di">di</Link>
        </Nav>

        <Switch>
          <Route path="/di">
            <Di />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}

const Container = styled.div`
  grid-template: 1fr / 18% 1fr;
  display: grid;

  animation: slide-in 625ms cubic-bezier(0.22, 0.54, 0.24, 1);
  @keyframes slide-in {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`
