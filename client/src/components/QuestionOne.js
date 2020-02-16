import React from 'react';
import QuestionItem from './QuestionItem';
import Diagramm from './Diagram';

export default class QuestionOne extends React.Component {

    constructor(props) {
        super(props);
        this.getDidUserAnswer = this.getDidUserAnswer.bind(this);
        this.state={didUserAnswer: false};
    }

    getDidUserAnswer () {
        if (localStorage.getItem('didUserAnswer1')) {
            this.setState({
                didUserAnswer: true
            })
        }
    }

    render () {
        if (!this.props.didUserAnswer) {
            return (
            <div>
                <QuestionItem question='В как формате Вы принимаете участие в национальных проектах?'
                    variants={['Инвестирую в проекты', 'Использую меры государственной поддержки в рамках нац. проектов',
                    'Изучаю условия участия в нацпроектах']} questionNumber={1} updateQuestionState={this.props.updateQuestionState}
                    questionState={this.props.questionState} updateAnswers={this.props.updateAnswers}/>
                <Diagramm answers={this.props.answers}/>
            </div>
            )
        } else {
            return (
                <div className="not-active-question">Администратор пока что не запустил опрос</div>
            )
        }
    }
}