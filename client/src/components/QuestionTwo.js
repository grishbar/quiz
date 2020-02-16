import React from 'react';
import QuestionItem from './QuestionItem';
import Diagramm from './Diagram';

export default class QuestionOne extends React.Component {

    constructor(props) {
        super(props);
        this.getDidUserAnswer = this.getDidUserAnswer.bind(this);
        this.state={didUserAnswer: false};
    }

    componentDidMount(){
        this.getDidUserAnswer();
    }

    getDidUserAnswer () {
        if (localStorage.getItem('didUserAnswer2')) {
            this.setState({
                didUserAnswer: true
            })
        } 
    }

    render () {
        const variants = ['Стало лучше', 'Стало хуже', 'Ничего не изменилось'];
        if (this.props.isActive) {
            return (
            <div>
                <QuestionItem question='Оцените ситуацию в рамках реформы контрольно-надзорной деятельности'
                    variants={variants} questionNumber={2} updateQuestionState={this.props.updateQuestionState}
                    questionState={this.props.questionState} updateAnswers={this.props.updateAnswers}
                    didUserAnswer={this.state.didUserAnswer} getDidUserAnswer={this.getDidUserAnswer}
                    isFinished={this.props.isFinished}/>
                {this.state.didUserAnswer && <Diagramm answers={this.props.answers} variants={variants}/>}
            </div>
            )
        } else {
            return (
                <div className="not-active-question">Администратор пока что не запустил опрос</div>
            )
        }
    }
}