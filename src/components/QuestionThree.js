import React from 'react';
import QuestionItem from './QuestionItem';

export default class QuestionOne extends React.Component {
    render () {
        return (
            <div>
                <QuestionItem question='Ведете ли вы инновационную деятельность?'
                    variants={['Да', 'Нет', 'Рассматриваю такую возможность']}/>
            </div>
        )
    }
}