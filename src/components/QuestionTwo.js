import React from 'react';
import QuestionItem from './QuestionItem';

export default class QuestionOne extends React.Component {
    render () {
        return (
        <div>
            <QuestionItem question='Оцените ситуацию в рамках реформы контрольно-надзорной деятельности'
                variants={['Стало лучше', 'Стало хуже', 'Ничего не изменилось']}/>
        </div>
        )
    }
}