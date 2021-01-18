import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import YourApp from "../components/YourApp"
import PrivateRoute from "./PrivateRoute"
import NotFoundPage from "../pages/NotFoundPage"

export const AppRouter = (props) => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" component={YourApp} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  )
}

export default AppRouter
