import React from "react";
import AdminPage from "../components/AdminPage"
import QuestionOne from "../components/QuestionOne"
import QuestionTwo from "../components/QuestionTwo"
import QuestionThree from "../components/QuestionThree"
import QuestionFour from "../components/QuestionFour"
import QuestionFive from "../components/QuestionFive"
import StartPage from "../components/StartPage"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <nav>
            <ul className="navigation">
              <li className="navigation__item">
                <Link to="/question1">вопрос 1</Link>
              </li>
              <li className="navigation__item">
                <Link to="/question2">вопрос 2</Link>
              </li>
              <li className="navigation__item">
                <Link to="/question3">вопрос 3</Link>
              </li>
              <li className="navigation__item">
                <Link to="/question4">вопрос 4</Link>
              </li>
              <li className="navigation__item">
                <Link to="/question5">вопрос 5</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/admin">
              <AdminPage />
            </Route>
            <Route path="/question1">
              <QuestionOne />
            </Route>
            <Route path="/question2">
              <QuestionTwo />
            </Route>
            <Route path="/question3">
              <QuestionThree />
            </Route>
            <Route path="/question4">
              <QuestionFour />
            </Route>
            <Route path="/question5">
              <QuestionFive />
            </Route>
            <Route path="/">
              <StartPage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}