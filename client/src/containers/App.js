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
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.startQuestion = this.startQuestion.bind(this);
    this.endQuestion = this.endQuestion.bind(this);
    this.resetQuestion = this.resetQuestion.bind(this);
    this.updateAnswers = this.updateAnswers.bind(this);
    this.updateQuestionState = this.updateQuestionState.bind(this);
    window.setInterval(this.update, 5000);
    this.state={answers: [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]], isIntervalSet: false,
      questionState: {1: true, 2: true, 3: true, 4: true, 5: true}, questionData: [
        {
            "isActive": false,
            "isFinished": false,
            "answers": [0, 0, 0]
        },
        {
            "isActive": false,
            "isFinished": false,
            "answers": [0, 0, 0]
        },
        {
            "isActive": false,
            "isFinished": false,
            "answers": [0, 0, 0]
        },
        {
            "isActive": false,
            "isFinished": false,
            "answers": [0, 0, 0]
        },
        {
            "isActive": false,
            "isFinished": false,
            "answers": [0, 0, 0]
        }]};
  }

  async update() {
    const response = await fetch('/api/question-data');
    const questionData = await response.json();
    let newAnswers = [];
    for (let i = 0; i < questionData.length; i++) {
      newAnswers.push(questionData[i]['answers']);
    }
    this.setState({
      answers: newAnswers,
      questionData: questionData
    });
  }

  async updateAnswers(questionNumber, choosedAnswer) {
    console.log('start post questionNumber - ' + questionNumber + ' choosedAnswer - ' + choosedAnswer);
    const response = await fetch('/api/question-data/add-answers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({questionNumber: questionNumber, choosedAnswer: choosedAnswer })});
    const questionData = await response.json();
    let newAnswers = [];
    for (let i = 0; i < questionData.length; i++) {
      newAnswers.push(questionData[i]['answers']);
    }
    this.setState({
      answers: newAnswers,
    });
  }

  updateQuestionState(question, state) {
    let tempState = this.state.questionState;
    tempState[question] = state;
    this.setState({
      questionState: tempState,
    });
  }

  async startQuestion(questionNumber) {
    const response = await fetch('/api/question-data/change-isactive', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({questionNumber: questionNumber})});
    const questionData = await response.json();
    this.setState({
      questionData: questionData,
    });
  }

  async endQuestion(questionNumber) {
    const response = await fetch('/api/question-data/change-isfinished', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({questionNumber: questionNumber})});
    const questionData = await response.json();
    this.setState({
      questionData: questionData,
    });
  }

  async resetQuestion(questionNumber) {
    const response = await fetch('/api/question-data/reset-question', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({questionNumber: questionNumber})});
    const questionData = await response.json();
    this.setState({
      questionData: questionData,
    });
  }

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
              <AdminPage startQuestion={this.startQuestion} endQuestion={this.endQuestion} resetQuestion={this.resetQuestion}
              questionData={this.state.questionData} />
            </Route>
            <Route path="/question1">
              <QuestionOne answers={this.state.answers[0]} updateQuestionState={this.updateQuestionState}
              questionState={this.state.questionState} updateAnswers={this.updateAnswers}
              isActive={this.state.questionData[0]["isActive"]} isFinished={this.state.questionData[0]["isFinished"]} />
            </Route>
            <Route path="/question2">
              <QuestionTwo answers={this.state.answers[1]} updateQuestionState={this.updateQuestionState}
              questionState={this.state.questionState} updateAnswers={this.updateAnswers}
              isActive={this.state.questionData[1]["isActive"]} isFinished={this.state.questionData[1]["isFinished"]} />
            </Route>
            <Route path="/question3">
              <QuestionThree answers={this.state.answers[2]} updateQuestionState={this.updateQuestionState}
              questionState={this.state.questionState} updateAnswers={this.updateAnswers}
              isActive={this.state.questionData[2]["isActive"]} isFinished={this.state.questionData[2]["isFinished"]} />
            </Route>
            <Route path="/question4">
              <QuestionFour answers={this.state.answers[3]} updateQuestionState={this.updateQuestionState}
              questionState={this.state.questionState} updateAnswers={this.updateAnswers}
              isActive={this.state.questionData[3]["isActive"]} isFinished={this.state.questionData[3]["isFinished"]} />
            </Route>
            <Route path="/question5">
              <QuestionFive answers={this.state.answers[4]} updateQuestionState={this.updateQuestionState}
              questionState={this.state.questionState} updateAnswers={this.updateAnswers}
              isActive={this.state.questionData[4]["isActive"]} isFinished={this.state.questionData[4]["isFinished"]} />
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