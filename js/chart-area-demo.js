// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example

function drawHps(data) {

  var ctx = document.getElementById("hpsChart");
  var labels = Object.keys(data);
  var values = [];
  for(l of labels) {
    values.push(hps[l]);
  }
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: "Hover count",
        lineTension: 0.3,
        backgroundColor: "rgba(2,117,216,0.2)",
        borderColor: "rgba(2,117,216,1)",
        pointRadius: 5,
        pointBackgroundColor: "rgba(2,117,216,1)",
        pointBorderColor: "rgba(255,255,255,0.8)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(2,117,216,1)",
        pointHitRadius: 50,
        pointBorderWidth: 2,
        data: values,
      }],
    },
    options: {
      tooltips: true,
      animation: {
          duration: 0
      },
      legend: {
        display: false
      }
    }
  });  
}
