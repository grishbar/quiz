import React from 'react';

export default class AdminPage extends React.Component {
    constructor(props) {
        super(props);
        this.checkInputPassword = this.checkInputPassword.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getQuestionInformaton = this.getQuestionInformaton.bind(this);
        this.state={isAuthenticated: false, inputPassword: ''};
    }

    handleChange(event) {
        this.setState({inputPassword: event.target.value});
    }

    async checkInputPassword(){
        const response = await fetch('/api/admin-password', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({password: this.state.inputPassword})
        });
        const isAuthenticated = await response.json();
        this.setState({
          isAuthenticated: isAuthenticated,
        });
    }

    getQuestionInformaton(question) {
        let isActive = question['isActive'] ? 'aктивен' : 'неактивен';
        let isFinished = question['isFinished'] ? 'завершен' : 'незавершен';
        let questionData = '1 - ' + question.answers[0] + ', 2 - ' + question.answers[1] + ', 3 - ' + question.answers[2];
        return isActive + ' ' + isFinished + ' ' + questionData;
    }

    render () {
        if (this.state.isAuthenticated) {
            return (
            <div className="admin-block">
                <div className="admin-block__item">
                    <div className="admin-block__question">Вопрос 1: {this.getQuestionInformaton(this.props.questionData[0])}</div>
                    <div className="admin-block__buttons">
                        <button className="button" onClick={(e) => this.props.startQuestion(1)}>Начать</button>
                        <button className="button" onClick={(e) => this.props.endQuestion(1)}>Завершить</button>
                        <button className="button" onClick={(e) => this.props.resetQuestion(1)}>Сбросить</button>
                    </div>
                </div>
                <div className="admin-block__item">
                    <div  className="admin-block__question">Вопрос 2: {this.getQuestionInformaton(this.props.questionData[1])}</div>
                    <div className="admin-block__buttons">
                        <button className="button" onClick={(e) => this.props.startQuestion(2)}>Начать</button>
                        <button className="button" onClick={(e) => this.props.endQuestion(2)}>Завершить</button>
                        <button className="button" onClick={(e) => this.props.resetQuestion(2)}>Сбросить</button>
                    </div>
                </div>
                <div className="admin-block__item">
                    <div  className="admin-block__question">Вопрос 3: {this.getQuestionInformaton(this.props.questionData[2])}</div>
                    <div className="admin-block__buttons">
                        <button className="button" onClick={(e) => this.props.startQuestion(3)}>Начать</button>
                        <button className="button" onClick={(e) => this.props.endQuestion(3)}>Завершить</button>
                        <button className="button" onClick={(e) => this.props.resetQuestion(3)}>Сбросить</button>
                    </div>
                </div>
                <div className="admin-block__item">
                    <div  className="admin-block__question">Вопрос 4: {this.getQuestionInformaton(this.props.questionData[3])}</div>
                    <div className="admin-block__buttons">
                        <button className="button" onClick={(e) => this.props.startQuestion(4)}>Начать</button>
                        <button className="button" onClick={(e) => this.props.endQuestion(4)}>Завершить</button>
                        <button className="button" onClick={(e) => this.props.resetQuestion(4)}>Сбросить</button>
                    </div>
                </div>
                <div className="admin-block__item">
                    <div  className="admin-block__question">Вопрос 5: {this.getQuestionInformaton(this.props.questionData[4])}</div>
                    <div className="admin-block__buttons">
                        <button className="button" onClick={(e) => this.props.startQuestion(5)}>Начать</button>
                        <button className="button" onClick={(e) => this.props.endQuestion(5)}>Завершить</button>
                        <button className="button" onClick={(e) => this.props.resetQuestion(5)}>Сбросить</button>
                    </div>
                </div>
            </div>
            )
        } else {
            return (
                <div className="admin-block-authentication">
                    <input className="button" type="password" value={this.state.inputPassword} onChange={this.handleChange} />
                    <button  className="button"  value="Отправить" onClick={(e) => this.checkInputPassword(e)}>Войти</button>
                </div>
            )
        }
    }
}