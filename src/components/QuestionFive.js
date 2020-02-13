import React from 'react';
import QuestionItem from './QuestionItem';

export default class QuestionOne extends React.Component {
    render () {
        return (
            <div>
                <QuestionItem question='Как, по Вашей оценке, обстоят дела в налоговой и тарифной сферах?'
                    variants={['Давление усилилось', 'Нагрузка уменьшилась', 'Ничего не изменилось']}/>
            </div>
        )
    }
}