// var ctx = document.getElementById('myChart').getContext('2d');

// let data = [{
//   "REGION": "Humidity",
//   "REV_VALUE": "54.6"
// }, {
//   "REGION": "temperature",
//   "REV_VALUE": "25.2"
// }, {
//   "REGION": "Soil",
//   "REV_VALUE": "0.3"
// }];



// let region = [];
// let rev_value = [];

// try {
//   data.map((item) => {
//     rev_value.push(item.REV_VALUE);
//     region.push(item.REGION);
//   });

//   var myChart = new Chart(ctx, {
//     //type: 'bar',
//     type: 'line',
//     data: {
//       labels: [...region],
//       datasets: [{
//         label: 'Regions',
//         data: [...rev_value],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)'
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)'
//         ],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         yAxes: [{
//           ticks: {
//             beginAtZero: true
//           }
//         }]
//       }
//     }
//   });

// } catch (error) {
//   console.log(error);
// }


Highcharts.chart('container', {
    title: {
        text: ''
    },
    chart: {
      type: 'spline',
      animation: Highcharts.svg, // don't animate in old IE
      marginRight: 10,
      events: {
        load: function() {
          var chart = this;
          setInterval(function() {
            chart.series.forEach(function(s) {
                // for (var i = 0; i < 20; i++) {
                // s.addPoint(Math.random(), false, true);
                //            }  
                /* for (var i = 0; i < 20; i++) {
                s.addPoint(i, false, true);
                } */
            });
            chart.redraw();
          }, 1000);
        }
      }
    },
    series: [
        {name: 'Humidity', data: []}, 
        {name: 'Temperature', data: []}, 
        {name: 'Soil', data: []}]
    
    
    // .map(function(s) {
    //   s.data = [];
    //    for (var i = 0; i < 10; i++) {
    //     s.data.push(Math.random());
    //   } 
    //   for (var i = 0; i < 10; i++){
    //       s.data.push(i);
    //     s.data.push(i-3);
    //   }
      
    //   return s;
    // }),
    
  });
  