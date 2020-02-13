import React from 'react';

export default class QuestionOne extends React.Component {
    render () {
        return (
            <form className="question-block">
                <div className="question-block__question">{this.props.question}</div>
                {this.props.variants.map((item, index) => (
                    <p key={index}><input name="question" type="radio" value="first" /> {item}</p>
                ))}
                <p><input type="submit" value="Выбрать" /></p>
            </form>
        )
    }
}