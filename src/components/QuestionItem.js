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
      //сюда дописать сохранение в локальное хранилище пользователя
    }

    async update(choosedAnswer) {
        console.log('start post');
        const response = await fetch('./question-data.json');
        let questionData = await response.json();
        questionData[this.props.questionNumber - 1]['answers'][choosedAnswer] += 1;
        console.log(questionData);
     // await fetch('./question-data.json', {method: 'POST', body: questionData});
    }
    
    render () {

        return (
            <form className="question-block" onSubmit={this.handleSubmit}>
                <div className="question-block__question">{this.props.question}</div>
                {this.props.questionState[this.props.questionNumber] && this.props.variants.map((item, index) => (
                    <label key={index} htmlFor={'opt' + index} className="radio">
                        <input type="radio" name="question" id={'opt' + index} className="hidden" value={index} onChange={this.handleChange} />
                        <span className="label"></span>{item}
                    </label>
                ))}
                {this.props.questionState[this.props.questionNumber] && <p><button type="submit" className="button">Отправить</button> </p>}
            </form>
        )
    }
}