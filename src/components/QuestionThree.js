import React from 'react';
import QuestionItem from './QuestionItem';
import Diagramm from './Diagram';

export default class QuestionOne extends React.Component {
    render () {
        return (
            <div>
                <QuestionItem question='Ведете ли вы инновационную деятельность?'
                    variants={['Да', 'Нет', 'Рассматриваю такую возможность']} questionNumber={3} updateQuestionState={this.props.updateQuestionState}
                    questionState={this.props.questionState} updateAnswers={this.props.updateAnswers}/>
                <Diagramm answers={this.props.answers}/>
            </div>
        )
    }
}