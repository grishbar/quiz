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
    //window.setInterval(this.update, 5000);
    this.state={answers: [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]], isIntervalSet: false,
       questionState: {1: true, 2: true, 3: true, 4: true, 5: true}, questionData: [
             {
        "isActive": false,
        "isFinished": false,
        "answers": [1, 2, 3]
    },
    {
        "isActive": false,
        "isFinished": false,
        "answers": [2, 2, 2]
    },
    {
        "isActive": false,
        "isFinished": false,
        "answers": [3, 2, 1]
    },
    {
        "isActive": false,
        "isFinished": false,
        "answers": [4, 4, 4]
    },
    {
        "isActive": false,
        "isFinished": false,
        "answers": [5, 0, 0]
    }]};
  }

  async update() {
    const response = await fetch('./question-data.json');
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

  updateAnswers(questionNumber, choosedAnswer) {
    let newAnswers = this.state.answers;
    newAnswers[questionNumber - 1][choosedAnswer] += 1;
    this.setState({
      answers: newAnswers,
    });
  }

  updateQuestionState(question, state){
    let tempState = this.state.questionState;
    tempState[question] = state;
    this.setState({
      questionState: tempState,
    });
  }

  async startQuestion(questionNumber) {
    let tempQuestionData = this.state.questionData;
    tempQuestionData[questionNumber - 1]['isActive'] = true;
    this.setState({
      questionData: tempQuestionData
    });
    console.log(tempQuestionData);
    //await fetch('./question-data.json', {method: 'POST', body: tempQuestionData});
  }

  async endQuestion(questionNumber) {
    let tempQuestionData = this.state.questionData;
    tempQuestionData[questionNumber - 1]['isActive'] = false;
    tempQuestionData[questionNumber - 1]['isFinished'] = true;
    this.setState({
      questionData: tempQuestionData
    });
    console.log(tempQuestionData);
    //await fetch('./question-data.json', {method: 'POST', body: tempQuestionData});
  }

  async resetQuestion(questionNumber) {
    let tempQuestionData = this.state.questionData;
    tempQuestionData[questionNumber - 1]['isActive'] = true;
    tempQuestionData[questionNumber - 1]['isFinished'] = false;
    tempQuestionData[questionNumber - 1]['answers'] = [0, 0, 0];
    this.setState({
      questionData: tempQuestionData
    });
    console.log(tempQuestionData);
    //await fetch('./question-data.json', {method: 'POST', body: tempQuestionData});
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
              <AdminPage startQuestion={this.startQuestion} endQuestion={this.endQuestion} resetQuestion={this.resetQuestion} />
            </Route>
            <Route path="/question1">
              <QuestionOne answers={this.state.answers[0]} updateQuestionState={this.updateQuestionState}
              questionState={this.state.questionState} updateAnswers={this.updateAnswers} />
            </Route>
            <Route path="/question2">
              <QuestionTwo answers={this.state.answers[1]} updateQuestionState={this.updateQuestionState}
              questionState={this.state.questionState} updateAnswers={this.updateAnswers} />
            </Route>
            <Route path="/question3">
              <QuestionThree answers={this.state.answers[2]} updateQuestionState={this.updateQuestionState}
              questionState={this.state.questionState} updateAnswers={this.updateAnswers} />
            </Route>
            <Route path="/question4">
              <QuestionFour answers={this.state.answers[3]} updateQuestionState={this.updateQuestionState}
              questionState={this.state.questionState} updateAnswers={this.updateAnswers} />
            </Route>
            <Route path="/question5">
              <QuestionFive answers={this.state.answers[4]} updateQuestionState={this.updateQuestionState}
              questionState={this.state.questionState} updateAnswers={this.updateAnswers} />
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