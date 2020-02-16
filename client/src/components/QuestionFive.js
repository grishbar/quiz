import React from 'react';
import QuestionItem from './QuestionItem';
import Diagramm from './Diagram';

export default class QuestionFive extends React.Component {

    constructor(props) {
        super(props);
        this.getDidUserAnswer = this.getDidUserAnswer.bind(this);
        this.state={didUserAnswer: false};
    }

    componentDidMount(){
        this.getDidUserAnswer();
    }

    getDidUserAnswer () {
        if (localStorage.getItem('didUserAnswer5')) {
            this.setState({
                didUserAnswer: true
            })
        } 
    }

    render () {
        const variants = ['Давление усилилось', 'Нагрузка уменьшилась', 'Ничего не изменилось'];
        if (this.props.isActive) {
            return (
            <div>
                <QuestionItem question='Как, по Вашей оценке, обстоят дела в налоговой и тарифной сферах?'
                    variants={variants} questionNumber={5} updateQuestionState={this.props.updateQuestionState}
                    questionState={this.props.questionState} updateAnswers={this.props.updateAnswers}
                    didUserAnswer={this.state.didUserAnswer} getDidUserAnswer={this.getDidUserAnswer}
                    isFinished={this.props.isFinished}/>
                {this.state.didUserAnswer && <Diagramm answers={this.props.answers} variants={variants}/>}
            </div>
            )
        } else {
            return (
                <div className="not-active-question">Администратор пока что не запустил опрос</div>
            )
        }
    }
}