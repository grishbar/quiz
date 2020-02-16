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
        if (localStorage.getItem('didUserAnswer1')) {
            this.setState({
                didUserAnswer: true
            })
        } 
    }

    render () {
        const variants = ['Инвестирую в проекты', 'Использую меры государственной поддержки в рамках нац. проектов', 'Изучаю условия участия в нацпроектах'];
        if (this.props.isActive || this.props.isFinished) {
            return (
            <div>
                <QuestionItem question='В как формате Вы принимаете участие в национальных проектах?'
                    variants={variants} questionNumber={1} updateQuestionState={this.props.updateQuestionState}
                    questionState={this.props.questionState} updateAnswers={this.props.updateAnswers}
                    didUserAnswer={this.state.didUserAnswer} getDidUserAnswer={this.getDidUserAnswer}
                    isFinished={this.props.isFinished}/>
                {(this.state.didUserAnswer || this.props.isFinished) && <Diagramm answers={this.props.answers} variants={variants}/>}
            </div>
            )
        } else {
            return (
                <div className="not-active-question">Администратор пока что не запустил опрос</div>
            )
        }
    }
}