import React from 'react';

export default class QuestionOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {choosedAnswer: '0'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({choosedAnswer: event.target.value});
    }
    
    handleSubmit(event) {
      //console.log(this.state.choosedAnswer);
      event.preventDefault();
      this.props.updateAnswers(this.props.questionNumber, this.state.choosedAnswer);
      this.props.updateQuestionState(this.props.questionNumber, false);
      localStorage.setItem('didUserAnswer' + this.props.questionNumber, true);
      this.props.getDidUserAnswer();
      //сюда дописать сохранение в локальное хранилище пользователя
    }
    
    render () {
        let shoudRenderSubmitFields = (!this.props.didUserAnswer && !this.props.isFinished);

        return (
            <form className="question-block" onSubmit={this.handleSubmit}>
                <div className="question-block__question">{this.props.question}</div>
                {shoudRenderSubmitFields && this.props.variants.map((item, index) => (
                    <label key={index} htmlFor={'opt' + index} className="radio">
                        <input type="radio" name="question" id={'opt' + index} className="hidden" value={index} onChange={this.handleChange} />
                        <span className="label"></span>{item}
                    </label>
                ))}
                {shoudRenderSubmitFields && <p><button type="submit" className="button">Отправить</button> </p>}
            </form>
        )
    }
}