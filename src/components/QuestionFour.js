import React from 'react';
import QuestionItem from './QuestionItem';

export default class QuestionOne extends React.Component {
    render () {
        return (
            <div>
                <QuestionItem question='Используете ли Вы при ведении бизнеса меры господдержки?'
                    variants={['Да', 'Нет', 'Рассматриваю такую возможность']}/>
            </div>
        )
    }
}