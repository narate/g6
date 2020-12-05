// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
function drawStatusCode(data) {
  var ctx = document.getElementById("statusCodeChart");

  var labels = Object.keys(data);
  var values = [];
  for(l of labels) {
    values.push(status_code[l]);
  }
  var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: "Count",
        backgroundColor: "rgba(2,117,216,1)",
        borderColor: "rgba(2,117,216,1)",
        data: values
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
