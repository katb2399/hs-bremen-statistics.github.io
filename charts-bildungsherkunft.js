// Donutdiagramm für 2013
var chart1 = document.getElementById('doughnut-2013');

var chart = new Chart(chart1, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Bildungsinländisch", "Bildungsausländisch"],
       datasets: [{
           labels: "2013",
           //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
           data: [74, 0],
           backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
            '#96D115',
            '#C3E240',
           ],
           borderColor: '#FFFFFF',
           borderWidth: 0.25,
       }]
   },  
   options:{
    scales: {
        yAxes: [{
           gridLines: {
              display: false,
              drawBorder: false,
           },
           ticks: {
               display: false,
                beginAtZero: true,
                scaleShowLabels:false,
        },
        }]
   },
       legend: {
          display: false,
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 5
      }
      },
       tooltips:{
         enabled: true,
         callbacks: {
          label: function(tooltipItem, data) {
            let label = data.labels [tooltipItem['index']];
            let label2 = data['datasets'][0]['data'][tooltipItem['index']] + " StudienanfängerInnen";
            return [label, label2];
          }
        }
     },
    }
   });

      //Horizontales Balkendiagramm für Studierende 2013
var chart15 = document.getElementById('hBar-2013');

var thisChart = new Chart(chart15, {    // Neues Chart Objekt erstellen
   type: 'horizontalBar',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Bildungsinländisch", "Bildungsausländisch"],
       datasets: [{
           label: "StudienanfängerInnen",
           data: [100,0],
           backgroundColor: '#96D115',
           borderColor: '#FFFFFF',
           borderWidth: 0.25,
       },{
        label: "Studierende",
        data: [98.9, 1.1],
        backgroundColor: '#FF761A',
        borderColor: '#FFFFFF',
        borderWidth: 0.25,
    }]
   },  
   options:{
    scales: {
        yAxes: [{
           gridLines: {
              display: false,
              drawBorder: true,
              color: 'white',
           },
           ticks: {
             fontFamily: 'Lato',
             fontSize: 20,
             fontColor: 'white',
             beginAtZero: true,
        },
        }],
        xAxes: [{
          gridLines: {
            display: false,
            drawBorder: true,
            color: 'white',
          },
          ticks: {
            fontFamily: 'Lato',
             fontSize: 15,
             fontColor: 'white',
              min: 0,
              max: 100,
              callback: function(index){return index+ "%";}
          }
      }],
   },
       legend: {
          display: false,
          position: 'top',
          
          labels: {
            fontFamily: 'Lato',
             fontSize: 15,
             fontColor: 'white',
             boxWidth: 20,
          },
      },
      
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 5
      }
      },
      tooltips: {
        enabled: true,
        color: 'white',
        mode: 'single',
        callbacks: {
            label: function(tooltipItems, data) {
                return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.xLabel + ' %';
            }
        }
    }
    }
    
   });
   
  /* document.getElementById('stud-beginner').style.backgroundColor =  thisChart.data.datasets[0].backgroundColor;
   document.getElementById('studs').style.backgroundColor =  thisChart.data.datasets[1].backgroundColor;
   document.getElementById('stud-beginner').innerText =  thisChart.data.datasets[0].label;
   document.getElementById('studs').innerText =  thisChart.data.datasets[1].label;

    function toggleData(value) {
     const visibilityData = thisChart.isDatasetVisible(value);
     if(thisChart.isDatasetVisible(value) == true) {
       thisChart.hide(value);
     }
   } */
   
   // Donutdiagramm für Studierende 2013
var chart8 = document.getElementById('doughnut-2013-b');

var chart = new Chart(chart8, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Bildungsinländisch", "Bildungsausländisch"],
       datasets: [{
           labels: "WiSe 2013/2014",
           //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
           data: [266, 3],
           backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
            '#FF761A',
            '#FFB380',
           ],
           borderColor: '#FFFFFF',
           borderWidth: 0.25,
       }]
   },  
   options:{
    scales: {
        yAxes: [{
           gridLines: {
              display: false,
              drawBorder: false,
           },
           ticks: {
               display: false,
                beginAtZero: true,
                scaleShowLabels:false,
        },
        }]
   },
       legend: {
          display: false,
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 5
      }
      },
       tooltips:{
         enabled:true,
         callbacks: {
          label: function(tooltipItem, data) {
            let label = data['labels'][tooltipItem['index']];
            let label2 = data['datasets'][0]['data'][tooltipItem['index']] + " Studierende";
            return [label, label2];
          }
        }
     },
    }
   });

// Donutdiagramm für 2014
var chart2 = document.getElementById('doughnut-2014');

var chart = new Chart(chart2, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Bildungsinländisch", "Bildungsausländisch"],
       datasets: [{
           labels: "2014",
           //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
           data: [77, 3],
           backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
            '#96D115',
            '#C3E240',
           ],
           borderColor: '#FFFFFF',
           borderWidth: 0.25,
       }]
   },  
   options:{
    scales: {
        yAxes: [{
           gridLines: {
              display: false,
              drawBorder: false,
           },
           ticks: {
               display: false,
                beginAtZero: true,
                scaleShowLabels:false,
        },
        }]
   },
       legend: {
          display: false,
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 5
      }
      },
       tooltips:{
         enabled:true,
         callbacks: {
          label: function(tooltipItem, data) {
            let label = data['labels'][tooltipItem['index']];
            let label2 = data['datasets'][0]['data'][tooltipItem['index']] + " StudienanfängerInnen";
            return [label, label2];
          }
        }
     },
    }
   });

    //Horizontales Balkendiagramm für Studierende 2014
var chart16 = document.getElementById('hBar-2014');

var chart = new Chart(chart16, {    // Neues Chart Objekt erstellen
   type: 'horizontalBar',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Bildungsinländisch", "Bildungsausländisch"],
       datasets: [{
           label: "StudienanfängerInnen",
           data: [96.3, 3.8],
           backgroundColor: '#96D115',
           borderColor: '#FFFFFF',
           borderWidth: 0.25,
       },{
        label: "Studierende",
        data: [97.5, 2.5],
        backgroundColor: '#FF761A',
        borderColor: '#FFFFFF',
        borderWidth: 0.25,
    }]
   },  
   options:{
    scales: {
      yAxes: [{
         gridLines: {
            display: false,
            drawBorder: true,
            color: 'white',
         },
         ticks: {
           fontFamily: 'Lato',
           fontSize: 20,
           fontColor: 'white',
           beginAtZero: true,
           align: 'start',
      },
      }],
      xAxes: [{
        gridLines: {
          display: false,
          drawBorder: true,
          color: 'white',
        },
        ticks: {
          fontFamily: 'Lato',
           fontSize: 15,
           fontColor: 'white',
            min: 0,
            max: 100,
            callback: function(index){return index+ "%";}
        }
    }],
 },
       legend: {
          display: false,
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 5
      }
      },
      tooltips: {
        enabled: true,
        color: 'white',
        mode: 'single',
        callbacks: {
            label: function(tooltipItems, data) {
                return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.xLabel + ' %';
            }
        }
    }
    }
   });

    // Donutdiagramm für Studierende WiSe 2014 / 2015
var chart9 = document.getElementById('doughnut-2014-b');

var chart = new Chart(chart9, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Bildungsinländisch", "Bildungsausländisch"],
       datasets: [{
           labels: "WiSe 2014/2015",
           //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
           data: [272, 7],
           backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
            '#FF761A',
            '#FFB380',
           ],
           borderColor: '#FFFFFF',
           borderWidth: 0.25,
       }]
   },  
   options:{
    scales: {
        yAxes: [{
           gridLines: {
              display: false,
              drawBorder: false,
           },
           ticks: {
               display: false,
                beginAtZero: true,
                scaleShowLabels:false,
        },
        }]
   },
       legend: {
          display: false,
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 5
      }
      },
       tooltips:{
         enabled:true,
         callbacks: {
          label: function(tooltipItem, data) {
            let label = data['labels'][tooltipItem['index']];
            let label2 = data['datasets'][0]['data'][tooltipItem['index']] + " Studierende";
            return [label, label2];
          }
        }
     },
    }
   });
   
   // Donutdiagramm für 2015
var chart3 = document.getElementById('doughnut-2015');

var chart = new Chart(chart3, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Bildungsinländisch", "Bildungsausländisch"],
       datasets: [{
           labels: "2015",
           //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
           data: [84,6],
           label: 2015,
           backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
            '#96D115',
            '#C3E240',
           ],
           borderColor: '#FFFFFF',
           borderWidth: 0.25,
       }]
   },  
   options:{
    scales: {
        yAxes: [{
           gridLines: {
              display: false,
              drawBorder: false,
           },
           ticks: {
               display: false,
                beginAtZero: true,
                scaleShowLabels:false,
        },
        }]
   },
       legend: {
          display: false,
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 5
      }
      },
       tooltips:{
         enabled:true,
         callbacks: {
          label: function(tooltipItem, data) {
            let label = data['labels'][tooltipItem['index']];
            let label2 = data['datasets'][0]['data'][tooltipItem['index']] + " StudienanfängerInnen";
            return [label, label2];
          }
        }
     },
    }
   });

   //Horizontales Balkendiagramm für Studierende 2015
var chart17 = document.getElementById('hBar-2015');

var chart = new Chart(chart17, {    // Neues Chart Objekt erstellen
   type: 'horizontalBar',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Bildungsinländisch", "Bildungsausländisch"],
       datasets: [{
           label: "StudienanfängerInnen",
           data: [93.3, 6.7],
           backgroundColor: '#96D115',
           borderColor: '#FFFFFF',
           borderWidth: 0.25,
       },{
        label: "Studierende",
        data: [96.8, 3.2],
        backgroundColor: '#FF761A',
        borderColor: '#FFFFFF',
        borderWidth: 0.25,
    }]
   },  
   options:{
    scales: {
      yAxes: [{
         gridLines: {
            display: false,
            drawBorder: true,
            color: 'white',
         },
         ticks: {
           fontFamily: 'Lato',
           fontSize: 20,
           fontColor: 'white',
           beginAtZero: true,
           align: 'start',
      },
      }],
      xAxes: [{
        gridLines: {
          display: false,
          drawBorder: true,
          color: 'white',
        },
        ticks: {
          fontFamily: 'Lato',
           fontSize: 15,
           fontColor: 'white',
            min: 0,
            max: 100,
            callback: function(index){return index+ "%";}
        }
    }],
 },
       legend: {
          display: false,
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 5
      }
      },
      tooltips: {
        enabled: true,
        color: 'white',
        mode: 'single',
        callbacks: {
            label: function(tooltipItems, data) {
                return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.xLabel + ' %';
            }
        }
    }
    }
   });

     // Donutdiagramm für Studierende WiSe 2015 und 2016
var chart10 = document.getElementById('doughnut-2015-b');

var chart = new Chart(chart10, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Bildungsinländisch", "Bildungsausländisch"],
       datasets: [{
           labels: "WiSe 2015/2016",
           //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
           data: [303, 10],
           backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
            '#FF761A',
            '#FFB380',
           ],
           borderColor: '#FFFFFF',
           borderWidth: 0.25,
       }]
   },  
   options:{
    scales: {
        yAxes: [{
           gridLines: {
              display: false,
              drawBorder: false,
           },
           ticks: {
               display: false,
                beginAtZero: true,
                scaleShowLabels:false,
        },
        }]
   },
       legend: {
          display: false,
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 5
      }
      },
       tooltips:{
         enabled:true,
         callbacks: {
          label: function(tooltipItem, data) {
            let label = data['labels'][tooltipItem['index']];
            let label2 = data['datasets'][0]['data'][tooltipItem['index']] + " Studierende";
            return [label, label2];
          }
        }
     },
    }
   });
   
   // Donutdiagramm für 2016
var chart4 = document.getElementById('doughnut-2016');

var chart = new Chart(chart4, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Bildungsinländisch", "Bildungsausländisch"],
       datasets: [{
           labels: "2016",
           //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
           data: [82,3],
           backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
            '#96D115',
            '#C3E240',
           ],
           borderColor: '#FFFFFF',
           borderWidth: 0.25,
       }]
   },  
   options:{
    scales: {
        yAxes: [{
           gridLines: {
              display: false,
              drawBorder: false,
           },
           ticks: {
               display: false,
                beginAtZero: true,
                scaleShowLabels:false,
        },
        }]
   },
       legend: {
          display: false,
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 5
      }
      },
       tooltips:{
         enabled:true,
         callbacks: {
          label: function(tooltipItem, data) {
            let label = data['labels'][tooltipItem['index']];
            let label2 = data['datasets'][0]['data'][tooltipItem['index']] + " StudienanfängerInnen";
            return [label, label2];
          }
        }
     },
    }
   });

   //Horizontales Balkendiagramm für Studierende 2016
var chart18 = document.getElementById('hBar-2016');

var chart = new Chart(chart18, {    // Neues Chart Objekt erstellen
   type: 'horizontalBar',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Bildungsinländisch", "Bildungsausländisch"],
       datasets: [{
           label: "StudienanfängerInnen",
           data: [96.5, 3.5],
           backgroundColor: '#96D115',
           borderColor: '#FFFFFF',
           borderWidth: 0.25,
       },{
        label: "Studierende",
        data: [96.9, 3.1],
        backgroundColor: '#FF761A',
        borderColor: '#FFFFFF',
        borderWidth: 0.25,
    }]
   },  
   options:{
    scales: {
      yAxes: [{
         gridLines: {
            display: false,
            drawBorder: true,
            color: 'white',
         },
         ticks: {
           fontFamily: 'Lato',
           fontSize: 20,
           fontColor: 'white',
           beginAtZero: true,
           align: 'start',
      },
      }],
      xAxes: [{
        gridLines: {
          display: false,
          drawBorder: true,
          color: 'white',
        },
        ticks: {
          fontFamily: 'Lato',
           fontSize: 15,
           fontColor: 'white',
            min: 0,
            max: 100,
            callback: function(index){return index+ "%";}
        }
    }],
 },
       legend: {
          display: false,
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 5
      }
      },
      tooltips: {
        enabled: true,
        color: 'white',
        mode: 'single',
        callbacks: {
            label: function(tooltipItems, data) {
                return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.xLabel + ' %';
            }
        }
    }
    }
   });
   
    // Donutdiagramm für Studierende WiSe 2016 und 2017
var chart11 = document.getElementById('doughnut-2016-b');

var chart = new Chart(chart11, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Bildungsinländisch", "Bildungsausländisch"],
       datasets: [{
           labels: "WiSe 2016/2017",
           //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
           data: [312, 10],
           backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
            '#FF761A',
            '#FFB380',
           ],
           borderColor: '#FFFFFF',
           borderWidth: 0.25,
       }]
   },  
   options:{
    scales: {
        yAxes: [{
           gridLines: {
              display: false,
              drawBorder: false,
           },
           ticks: {
               display: false,
                beginAtZero: true,
                scaleShowLabels:false,
        },
        }]
   },
       legend: {
          display: false,
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 5
      }
      },
       tooltips:{
         enabled:true,
         callbacks: {
          label: function(tooltipItem, data) {
            let label = data['labels'][tooltipItem['index']];
            let label2 = data['datasets'][0]['data'][tooltipItem['index']] + " Studierende";
            return [label, label2];
          }
        }
     },
    }
   });

// Donutdiagramm für 2017
var chart5 = document.getElementById('doughnut-2017');

var chart = new Chart(chart5, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Bildungsinländisch", "Bildungsausländisch"],
       datasets: [{
           labels: "2017",
           //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
           data: [78,3],
           backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
            '#96D115',
            '#C3E240',
           ],
           borderColor: '#FFFFFF',
           borderWidth: 0.25,
       }]
   },  
   options:{
    scales: {
        yAxes: [{
           gridLines: {
              display: false,
              drawBorder: false,
           },
           ticks: {
               display: false,
                beginAtZero: true,
                scaleShowLabels:false,
        },
        }]
   },
       legend: {
          display: false,
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 5
      }
      },
       tooltips:{
         enabled:true,
         callbacks: {
          label: function(tooltipItem, data) {
            let label = data['labels'][tooltipItem['index']];
            let label2 = data['datasets'][0]['data'][tooltipItem['index']] + " StudienanfängerInnen";
            return [label, label2];
          }
        }
     },
    }
   });

//Horizontales Balkendiagramm für Studierende 2017
var chart19 = document.getElementById('hBar-2017');

var chart = new Chart(chart19, {    // Neues Chart Objekt erstellen
   type: 'horizontalBar',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Bildungsinländisch", "Bildungsausländisch"],
       datasets: [{
           label: "StudienanfängerInnen",
           data: [96.3, 3.7],
           backgroundColor: '#96D115',
           borderColor: '#FFFFFF',
           borderWidth: 0.25,
       },{
        label: "Studierende",
        data: [96.5, 3.5],
        backgroundColor: '#FF761A',
        borderColor: '#FFFFFF',
        borderWidth: 0.25,
    }]
   },  
   options:{
    scales: {
      yAxes: [{
         gridLines: {
            display: false,
            drawBorder: true,
            color: 'white',
         },
         ticks: {
           fontFamily: 'Lato',
           fontSize: 20,
           fontColor: 'white',
           beginAtZero: true,
           align: 'start',
      },
      }],
      xAxes: [{
        gridLines: {
          display: false,
          drawBorder: true,
          color: 'white',
        },
        ticks: {
          fontFamily: 'Lato',
           fontSize: 15,
           fontColor: 'white',
            min: 0,
            max: 100,
            callback: function(index){return index+ "%";}
        }
    }],
 },
       legend: {
          display: false,
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 5
      }
      },
      tooltips: {
        enabled: true,
        color: 'white',
        mode: 'single',
        callbacks: {
            label: function(tooltipItems, data) {
                return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.xLabel + ' %';
            }
        }
    }
    }
   });

    // Donutdiagramm für Studierende WiSe 2016 und 2017
var chart12 = document.getElementById('doughnut-2017-b');

var chart = new Chart(chart12, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Bildungsinländisch", "Bildungsausländisch"],
       datasets: [{
           labels: "WiSe 2017/2018",
           //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
           data: [328, 12],
           backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
            '#FF761A',
            '#FFB380',
           ],
           borderColor: '#FFFFFF',
           borderWidth: 0.25,
       }]
   },  
   options:{
    scales: {
        yAxes: [{
           gridLines: {
              display: false,
              drawBorder: false,
           },
           ticks: {
               display: false,
                beginAtZero: true,
                scaleShowLabels:false,
        },
        }]
   },
       legend: {
          display: false,
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 5
      }
      },
       tooltips:{
         enabled:true,
         callbacks: {
          label: function(tooltipItem, data) {
            let label = data['labels'][tooltipItem['index']];
            let label2 = data['datasets'][0]['data'][tooltipItem['index']] + " Studierende";
            return [label, label2];
          }
        }
     },
    }
   });

      // Donutdiagramm für 2016
var chart6 = document.getElementById('doughnut-2018');

var chart = new Chart(chart6, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Bildungsinländisch", "Bildungsausländisch"],
       datasets: [{
           labels: "2018",
           //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
           data: [63,2],
           backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
            '#96D115',
            '#C3E240',
           ],
           borderColor: '#FFFFFF',
           borderWidth: 0.25,
       }]
   },  
   options:{
    scales: {
        yAxes: [{
           gridLines: {
              display: false,
              drawBorder: false,
           },
           ticks: {
               display: false,
                beginAtZero: true,
                scaleShowLabels:false,
        },
        }]
   },
       legend: {
          display: false,
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 5
      }
      },
       tooltips:{
         enabled:true,
         callbacks: {
          label: function(tooltipItem, data) {
            let label = data['labels'][tooltipItem['index']];
            let label2 = data['datasets'][0]['data'][tooltipItem['index']] + " StudienanfängerInnen";
            return [label, label2];
          }
        }
     },
    }
   });

       //Horizontales Balkendiagramm für Studierende 2018
var chart20 = document.getElementById('hBar-2018');

var chart = new Chart(chart20, {    // Neues Chart Objekt erstellen
   type: 'horizontalBar',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Bildungsinländisch", "Bildungsausländisch"],
       datasets: [{
           label: "StudienanfängerInnen",
           data: [96.9, 3.1],
           backgroundColor: '#96D115',
           borderColor: '#FFFFFF',
           borderWidth: 0.25,
       },{
        label: "Studierende",
        data: [95.3, 4.7],
        backgroundColor: '#FF761A',
        borderColor: '#FFFFFF',
        borderWidth: 0.25,
    }]
   },  
   options:{
    scales: {
      yAxes: [{
         gridLines: {
            display: false,
            drawBorder: true,
            color: 'white',
         },
         ticks: {
           fontFamily: 'Lato',
           fontSize: 20,
           fontColor: 'white',
           beginAtZero: true,
           align: 'start',
      },
      }],
      xAxes: [{
        gridLines: {
          display: false,
          drawBorder: true,
          color: 'white',
        },
        ticks: {
          fontFamily: 'Lato',
           fontSize: 15,
           fontColor: 'white',
            min: 0,
            max: 100,
            callback: function(index){return index+ "%";}
        }
    }],
 },
       legend: {
          display: false,
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 5
      }
      },
      tooltips: {
        enabled: true,
        color: 'white',
        mode: 'single',
        callbacks: {
            label: function(tooltipItems, data) {
                return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.xLabel + ' %';
            }
        }
    }
    }
   });

     // Donutdiagramm für Studierende WiSe 2018 und 2019
var chart13 = document.getElementById('doughnut-2018-b');

var chart = new Chart(chart13, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Bildungsinländisch", "Bildungsausländisch"],
       datasets: [{
           labels: "WiSe 2018/2019",
           //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
           data: [302, 15],
           backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
            '#FF761A',
            '#FFB380',
           ],
           borderColor: '#FFFFFF',
           borderWidth: 0.25,
       }]
   },  
   options:{
    scales: {
        yAxes: [{
           gridLines: {
              display: false,
              drawBorder: false,
           },
           ticks: {
               display: false,
                beginAtZero: true,
                scaleShowLabels:false,
        },
        }]
   },
       legend: {
          display: false,
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 5
      }
      },
       tooltips:{
         enabled:true,
         callbacks: {
          label: function(tooltipItem, data) {
            let label = data['labels'][tooltipItem['index']];
            let label2 = data['datasets'][0]['data'][tooltipItem['index']] + " Studierende";
            return [label, label2];
          }
        }
     },
    }
   });

      // Donutdiagramm für 2016
var chart7 = document.getElementById('doughnut-2019');

var chart = new Chart(chart7, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Bildungsinländisch", "Bildungsausländisch"],
       datasets: [{
           labels: "2019",
           //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
           data: [76,6],
           backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
            '#96D115',
            '#C3E240',
           ],
           borderColor: '#FFFFFF',
           borderWidth: 0.25,
       }]
   },  
   options:{
    scales: {
        yAxes: [{
           gridLines: {
              display: false,
              drawBorder: false,
           },
           ticks: {
               display: false,
                beginAtZero: true,
                scaleShowLabels:false,
        },
        }]
   },
       legend: {
          display: false,
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 5
      }
      },
       tooltips:{
         enabled:true,
         callbacks: {
          label: function(tooltipItem, data) {
            let label = data['labels'][tooltipItem['index']];
            let label2 = data['datasets'][0]['data'][tooltipItem['index']] + " StudienanfängerInnen";
            return [label, label2];
          }
        }
     },
    }
   });

 //Horizontales Balkendiagramm für Studierende 2019
 var chart21 = document.getElementById('hBar-2019');

 var chart = new Chart(chart21, {    // Neues Chart Objekt erstellen
    type: 'horizontalBar',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ["Bildungsinländisch", "Bildungsausländisch"],
        datasets: [{
            label: "StudienanfängerInnen",
            data: [92.7, 7.3],
            backgroundColor: '#96D115',
            borderColor: '#FFFFFF',
            borderWidth: 0.25,
        },{
         label: "Studierende",
         data: [94.2, 5.8],
         backgroundColor: '#FF761A',
         borderColor: '#FFFFFF',
         borderWidth: 0.25,
     }]
    },  
    options:{
      scales: {
        yAxes: [{
           gridLines: {
              display: false,
              drawBorder: true,
              color: 'white',
           },
           ticks: {
             fontFamily: 'Lato',
             fontSize: 20,
             fontColor: 'white',
             beginAtZero: true,
             align: 'start',
        },
        }],
        xAxes: [{
          gridLines: {
            display: false,
            drawBorder: true,
            color: 'white',
          },
          ticks: {
            fontFamily: 'Lato',
             fontSize: 15,
             fontColor: 'white',
              min: 0,
              max: 100,
              callback: function(index){return index+ "%";}
          }
      }],
   },
        legend: {
           display: false,
       },
       layout: {
         padding: {
           left: 0,
           right: 0,
           top: 0,
           bottom: 5
       }
       },
       tooltips: {
        enabled: true,
        color: 'white',
        mode: 'single',
        callbacks: {
            label: function(tooltipItems, data) {
                return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.xLabel + ' %';
            }
        }
    }
     }
    });
 
   // Donutdiagramm für Studierende WiSe 2019 und 2020
var chart14 = document.getElementById('doughnut-2019-b');

var chart = new Chart(chart14, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Bildungsinländisch", "Bildungsausländisch"],
       datasets: [{
           labels: "WiSe 2019/2020",
           //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
           data: [309, 19],
           backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
            '#FF761A',
            '#FFB380',
           ],
           borderColor: '#FFFFFF',
           borderWidth: 0.25,
       }]
   },  
   options:{
    scales: {
        yAxes: [{
           gridLines: {
              display: false,
              drawBorder: false,
           },
           ticks: {
               display: false,
                beginAtZero: true,
                scaleShowLabels:false,
        },
        }]
   },
       legend: {
          display: false,
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 5
      }
      },
       tooltips:{
         enabled:true,
         callbacks: {
          label: function(tooltipItem, data) {
            let label = data['labels'][tooltipItem['index']];
            let label2 = data['datasets'][0]['data'][tooltipItem['index']] + " Studierende";
            return [label, label2];
          }
        }
     },
    }
   });