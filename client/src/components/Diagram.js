import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries
} from 'react-vis';


export default class Example extends React.Component {
  state = {
    useCanvas: false
  };

  render() {
    const blueData = [{x: '1', y: this.props.answers[0]}, {x: '2', y: this.props.answers[1]}, {x: '3', y: this.props.answers[2]}];
    const labelData = blueData.map((d, idx) => ({
      x: d.x,
      y: blueData[idx].y
    }));
    const {useCanvas} = this.state;
    const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    return (
      <div className="diagramm">
        <XYPlot xType="ordinal" width={Math.max(window.innerWidth/2, 300)} height={500} xDistance={100}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <BarSeries data={blueData} />
          <LabelSeries data={labelData} getLabel={d => d.x} />
        </XYPlot>
      </div>
    );
  }
}