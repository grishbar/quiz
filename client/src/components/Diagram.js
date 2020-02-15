import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  HorizontalBarSeries,
  HorizontalBarSeriesCanvas
} from 'react-vis';

export default class Example extends React.Component {
  state = {
    useCanvas: false
  };

  render() {
    const {useCanvas} = this.state;
    const BarSeries = useCanvas
      ? HorizontalBarSeriesCanvas
      : HorizontalBarSeries;
    return (
      <div>
        <XYPlot width={700} height={600} stackBy="x" warranty={3}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <BarSeries color="#58aef3" data={[{y: 1, x: this.props.answers[0]}, {y: 2, x: 0}, {y: 3, x: 0}]} />
          <BarSeries color="#58aef3" data={[{y: 1, x: 0}, {y: 2, x: this.props.answers[1]}, {y: 3, x: 0}]} />
          <BarSeries color="#58aef3" data={[{y: 1, x: 0}, {y: 2, x: 0}, {y: 3, x: this.props.answers[2]}]} />
        </XYPlot>
      </div>
    );
  }
}