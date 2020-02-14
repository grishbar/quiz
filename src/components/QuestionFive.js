import React from 'react';
import QuestionItem from './QuestionItem';
import Diagramm from './Diagram';

export default class QuestionOne extends React.Component {
    render () {
        return (
            <div>
                <QuestionItem question='Как, по Вашей оценке, обстоят дела в налоговой и тарифной сферах?'
                    variants={['Давление усилилось', 'Нагрузка уменьшилась', 'Ничего не изменилось']} questionNumber={5} updateQuestionState={this.props.updateQuestionState}
                    questionState={this.props.questionState} updateAnswers={this.props.updateAnswers}/>
                <Diagramm answers={this.props.answers}/>
            </div>
        )
    }
}