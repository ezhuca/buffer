import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactHighcharts from 'react-highcharts';
import HighchartsMore from 'highcharts-more';
import SolidGauge from 'highcharts-solid-gauge';

class Demo extends Component {
  constructor (props) {
    super(props);
    HighchartsMore(ReactHighcharts.Highcharts);
    SolidGauge(ReactHighcharts.Highcharts);
    
    window.Highcharts = ReactHighcharts.Highcharts;
  }
  render () {
    return (
      <ReactHighcharts config={
      multiChartsConfig(460,60,40,10,'Total','Sent')}></ReactHighcharts>
    );
  }
}

const multiChartsConfig = (value, open, click, placement, str1, str2) => {
  return {
    chart: {
        type: 'solidgauge',
        height: 360,
        width: 360,
        marginTop: 10,
        marginBottom: 0,
        style: { margin: 'auto' }
    },
    title: null,
    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [
          {
            backgroundColor: '#D8D8D8',
            outerRadius: '110%',
            innerRadius: '100%',
            borderWidth: 0
          },{
            backgroundColor: '#D8D8D8',
            outerRadius: '93%',
            innerRadius: '83%',
            borderWidth: 0
          },{
            backgroundColor: '#D8D8D8',
            outerRadius: '76%',
            innerRadius: '66%',
            borderWidth: 0
          }
        ]
    },
    tooltip:     {
        enabled: false
    },
    // the value axis
    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickPositions: []
    },
    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: true,
          borderWidth: 0,
          y: -30,
          useHTML: true,
          formatter: () => {
            return (`
              <div style="text-align: center;font-size:15px;color: #777777;">
              <div style="color: #009fc5;font-size: 17px;">${value.toLocaleString()}</div><div>${str1}</div><div>${str2}</div>
              </div>
            `);
          }
        },
        linecap: 'round',
        rounded: true,
        stickyTracking: false
      }
    },
    credits:     {
        enabled: false
    },
    series: [
      {
        name: 'open',
        rounded: true,
        data: [{
          color: '#009fc5',
          radius: '110%',
          innerRadius: '100%',
          y: Math.round((open / value) * 100) 
        }]
      },
      {
        name: 'click',
        data: [{
          color: 'green',
          radius: '93%',
          innerRadius: '83%',
          y: Math.round((click / value) * 100) 
        }]
      },
      {
        name: 'placement',
        data: [{
          color: 'red',
          radius: '76%',
          innerRadius: '66%',
          y: Math.round((placement / value) * 100) 
        }]
      }
    ]
  };
}

render(<Demo />, document.getElementById('root'));
