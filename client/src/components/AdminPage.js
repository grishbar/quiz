import React from 'react';

export default class QuestionOne extends React.Component {
    render () {
        return (
        <div className="admin-block">
            <div className="admin-block__item">
                <div className="admin-block__question">Вопрос 1</div>
                <button className="button" onClick={(e) => this.props.startQuestion(1)}>Начать</button>
                <button className="button" onClick={(e) => this.props.endQuestion(1)}>Завершить</button>
                <button className="button" onClick={(e) => this.props.resetQuestion(1)}>Сбросить</button>
            </div>
            <div className="admin-block__item">
                <div  className="admin-block__question">Вопрос 2</div>
                <button className="button" onClick={(e) => this.props.startQuestion(2)}>Начать</button>
                <button className="button" onClick={(e) => this.props.endQuestion(2)}>Завершить</button>
                <button className="button" onClick={(e) => this.props.resetQuestion(2)}>Сбросить</button>
            </div>
            <div className="admin-block__item">
                <div  className="admin-block__question">Вопрос 3</div>
                <button className="button" onClick={(e) => this.props.startQuestion(3)}>Начать</button>
                <button className="button" onClick={(e) => this.props.endQuestion(3)}>Завершить</button>
                <button className="button" onClick={(e) => this.props.resetQuestion(3)}>Сбросить</button>
            </div>
            <div className="admin-block__item">
                <div  className="admin-block__question">Вопрос 4</div>
                <button className="button" onClick={(e) => this.props.startQuestion(4)}>Начать</button>
                <button className="button" onClick={(e) => this.props.endQuestion(4)}>Завершить</button>
                <button className="button" onClick={(e) => this.props.resetQuestion(4)}>Сбросить</button>
            </div>
            <div className="admin-block__item">
                <div  className="admin-block__question">Вопрос 5</div>
                <button className="button" onClick={(e) => this.props.startQuestion(5)}>Начать</button>
                <button className="button" onClick={(e) => this.props.endQuestion(5)}>Завершить</button>
                <button className="button" onClick={(e) => this.props.resetQuestion(5)}>Сбросить</button>
            </div>
        </div>
        )
    }
}