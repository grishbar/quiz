import React from 'react';
import QuestionItem from './QuestionItem';

export default class QuestionOne extends React.Component {
    render () {
        return (
        <div>
            <QuestionItem question='В как формате Вы принимаете участие в национальных проектах?'
                variants={['Инвестирую в проекты', 'Использую меры государственной поддержки в рамках нац. проектов',
                'Изучаю условия участия в нацпроектах']}/>
        </div>
        )
    }
}