<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Highcharts - Activity Gauge Chart</title>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/highcharts-more.js"></script>
    <script src="https://code.highcharts.com/modules/solid-gauge.js"></script>
    <script type="text/javascript">
        $(function () {
            var chartype = {
                type: 'solidgauge',
                marginTop: 50
            }
            var chartitle = {
                text: 'Activity',
                style: {
                    fontSize: '24px'
                }
            }
            var chartooltip = {
                borderWidth: 0,
                backgroundColor: 'none',
                shadow: false,
                style: {
                    fontSize: '16px'
                },
                pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
                positioner: function (labelWidth, labelHeight) {
                    return {
                        x: 200 - labelWidth / 2,
                        y: 180
                    };
                }
            }
            var chartpane = {
                startAngle: 0,
                endAngle: 360,
                background: [{ // Track for Move
                    outerRadius: '112%',
                    innerRadius: '88%',
                    backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.3).get(),
                    borderWidth: 0
                }, { // Track for Exercise
                    outerRadius: '87%',
                    innerRadius: '63%',
                    backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.3).get(),
                    borderWidth: 0
                }, { // Track for Stand
                    outerRadius: '62%',
                    innerRadius: '38%',
                    backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.3).get(),
                    borderWidth: 0
                }]
            }
            var chartyaxis = {
                min: 0,
                max: 100,
                lineWidth: 0,
                tickPositions: []
            }
               var chartplotOptions= {
                solidgauge: {
                        borderWidth: '34px',
                        dataLabels: {
                        enabled: false
                        },
                    linecap: 'round',
                    stickyTracking: false
                }
            }
               var chartseries = [{
                   name: 'Move',
                   borderColor: Highcharts.getOptions().colors[0],
                   data: [{
                       color: Highcharts.getOptions().colors[0],
                       radius: '100%',
                       innerRadius: '100%',
                       y: 80
                   }]
               }, {
                   name: 'Exercise',
                   borderColor: Highcharts.getOptions().colors[1],
                   data: [{
                       color: Highcharts.getOptions().colors[1],
                       radius: '75%',
                       innerRadius: '75%',
                       y: 65
                   }]
               }, {
                   name: 'Stand',
                   borderColor: Highcharts.getOptions().colors[2],
                   data: [{
                       color: Highcharts.getOptions().colors[2],
                       radius: '50%',
                       innerRadius: '50%',
                       y: 50
                   }]
               }]
                Highcharts.chart('container', {
                chart:chartype,
                title: chartitle,
                tooltip: chartooltip,     
                pane:chartpane,
                yAxis: chartyaxis,
                plotOptions:chartplotOptions,
                series: chartseries
            },
            /**
     * In the chart load callback, add icons on top of the circular shapes
     */
    function callback() {
        // Move icon
        this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 2,
                'zIndex': 10
            })
            .translate(190, 26)
            .add(this.series[2].group);
        // Exercise icon
        this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8, 'M', 8, -8, 'L', 16, 0, 8, 8])
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 2,
                'zIndex': 10
            })
            .translate(190, 61)
            .add(this.series[2].group);
        // Stand icon
        this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 2,
                'zIndex': 10
            })
            .translate(190, 96)
            .add(this.series[2].group);
    });
        });
    </script>
</head>
<body>
    <div id="container" style="width: 400px; height: 400px; margin: 0 auto">
    </div>
</body>
</html>
