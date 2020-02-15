import React from 'react';
import QuestionItem from './QuestionItem';
import Diagramm from './Diagram';

export default class QuestionOne extends React.Component {
    render () {
        return (
            <div>
                <QuestionItem question='Используете ли Вы при ведении бизнеса меры господдержки?'
                    variants={['Да', 'Нет', 'Рассматриваю такую возможность']} questionNumber={4} updateQuestionState={this.props.updateQuestionState}
                    questionState={this.props.questionState} updateAnswers={this.props.updateAnswers}/>
                <Diagramm answers={this.props.answers}/>
            </div>
        )
    }
}