import React from 'react';

export default class QuestionOne extends React.Component {
    render () {
        return (
        <div className="qustion-block">
            <form>
                <div className="qustion-block__question"></div>
                <p>Какое у вас состояние разума?</p>
                <p><input name="dzen" type="radio" value="nedzen" /> Не дзен</p>
                <p><input name="dzen" type="radio" value="dzen" /> Дзен</p>
                <p><input name="dzen" type="radio" value="pdzen" /> Полный дзен</p>
                <p><input type="submit" value="Выбрать" /></p>
            </form>
        </div>
        )
    }
}