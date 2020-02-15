import React from 'react';
import QuestionItem from './QuestionItem';
import Diagramm from './Diagram';

export default class QuestionOne extends React.Component {
    render () {
        return (
        <div>
            <QuestionItem question='Оцените ситуацию в рамках реформы контрольно-надзорной деятельности'
                variants={['Стало лучше', 'Стало хуже', 'Ничего не изменилось']} questionNumber={2} updateQuestionState={this.props.updateQuestionState}
                questionState={this.props.questionState} updateAnswers={this.props.updateAnswers}/>
            <Diagramm answers={this.props.answers}/>
        </div>
        )
    }
}