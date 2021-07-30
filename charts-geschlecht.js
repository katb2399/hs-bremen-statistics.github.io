// Donutdiagramm für 2013
var chart1 = document.getElementById('ges-2013');

var chart = new Chart(chart1, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Männlich", "Weiblich"],
       datasets: [{
           labels: "2013",
           data: [61,13],
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
         color: 'white',
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

   //Horizontales Balkendiagramm für Studierende 2013
var chart15 = document.getElementById('hBar-ges-2013');

var thisChart = new Chart(chart15, {    // Neues Chart Objekt erstellen
   type: 'horizontalBar',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Männlich", "Weiblich"],
       datasets: [{
           label: "StudienanfängerInnen",
           data: [82.4, 17.6],
           backgroundColor: '#96D115',
           borderColor: '#FFFFFF',
           borderWidth: 0.25,
       },{
        label: "Studierende",
        data: [82.9, 17.1],
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
           stepSize: 20,
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

   // Donutdiagramm für Studierende 2013
var chart8 = document.getElementById('ges-2013-b');

var chart = new Chart(chart8, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
    labels: ["Männlich", "Weiblich"],
       datasets: [{
           labels: "WiSe 2013/2014",
           //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
           data: [223, 46],
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
var chart2 = document.getElementById('ges-2014');

var chart = new Chart(chart2, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
    labels: ["Männlich", "Weiblich"],
       datasets: [{
           labels: "2014",
           //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
           data: [60,20],
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
var chart16 = document.getElementById('hBar-ges-2014');

var thisChart = new Chart(chart16, {    // Neues Chart Objekt erstellen
   type: 'horizontalBar',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Männlich", "Weiblich"],
       datasets: [{
           label: "StudienanfängerInnen",
           data: [75.0, 25.0],
           backgroundColor: '#96D115',
           borderColor: '#FFFFFF',
           borderWidth: 0.25,
       },{
        label: "Studierende",
        data: [83.5, 19.5],
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
           stepSize: 20,
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
var chart9 = document.getElementById('ges-2014-b');

var chart = new Chart(chart9, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
    labels: ["Männlich", "Weiblich"],
       datasets: [{
           labels: "WiSe 2014/2015",
           //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
           data: [233, 46],
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
var chart3 = document.getElementById('ges-2015');

var chart = new Chart(chart3, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
    labels: ["Männlich", "Weiblich"],
       datasets: [{
           labels: "2015",
           //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
           data: [69,21],
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
var chart17 = document.getElementById('hBar-ges-2015');

var thisChart = new Chart(chart17, {    // Neues Chart Objekt erstellen
   type: 'horizontalBar',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Männlich", "Weiblich"],
       datasets: [{
           label: "StudienanfängerInnen",
           data: [76.7, 23.3],
           backgroundColor: '#96D115',
           borderColor: '#FFFFFF',
           borderWidth: 0.25,
       },{
        label: "Studierende",
        data: [80.8, 19.2],
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
           stepSize: 20,
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
var chart10 = document.getElementById('ges-2015-b');

var chart = new Chart(chart10, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
    labels: ["Männlich", "Weiblich"],
       datasets: [{
           labels: "WiSe 2015/2016",
           //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
           data: [253, 60],
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
var chart4 = document.getElementById('ges-2016');

var chart = new Chart(chart4, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
    labels: ["Männlich", "Weiblich"],
       datasets: [{
           labels: "2016",
           //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
           data: [65,20],
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
var chart18 = document.getElementById('hBar-ges-2016');

var thisChart = new Chart(chart18, {    // Neues Chart Objekt erstellen
   type: 'horizontalBar',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Männlich", "Weiblich"],
       datasets: [{
           label: "StudienanfängerInnen",
           data: [76.5, 23.5],
           backgroundColor: '#96D115',
           borderColor: '#FFFFFF',
           borderWidth: 0.25,
       },{
        label: "Studierende",
        data: [81.1, 18.9],
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
           stepSize: 20,
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
var chart11 = document.getElementById('ges-2016-b');

var chart = new Chart(chart11, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
    labels: ["Männlich", "Weiblich"],
       datasets: [{
           labels: "WiSe 2016/2017",
           //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
           data: [261, 61],
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
var chart5 = document.getElementById('ges-2017');

var chart = new Chart(chart5, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
    labels: ["Männlich", "Weiblich"],
       datasets: [{
           labels: "2017",
           data: [59,22],
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
   var chart19 = document.getElementById('hBar-ges-2017');

   var thisChart = new Chart(chart19, {    // Neues Chart Objekt erstellen
      type: 'horizontalBar',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data: {
          labels: ["Männlich", "Weiblich"],
          datasets: [{
              label: "StudienanfängerInnen",
              data: [72.8, 27.2],
              backgroundColor: '#96D115',
              borderColor: '#FFFFFF',
              borderWidth: 0.25,
          },{
           label: "Studierende",
           data: [78.5, 21.5],
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
               stepSize: 20,
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
var chart12 = document.getElementById('ges-2017-b');

var chart = new Chart(chart12, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
    labels: ["Männlich", "Weiblich"],
       datasets: [{
           labels: "WiSe 2017/2018",
           //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
           data: [267, 73],
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
var chart6 = document.getElementById('ges-2018');

var chart = new Chart(chart6, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
    labels: ["Männlich", "Weiblich"],
       datasets: [{
           labels: "2018",
           data: [47,18],
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
var chart20 = document.getElementById('hBar-ges-2018');

var thisChart = new Chart(chart20, {    // Neues Chart Objekt erstellen
   type: 'horizontalBar',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Männlich", "Weiblich"],
       datasets: [{
           label: "StudienanfängerInnen",
           data: [72.3, 27.7],
           backgroundColor: '#96D115',
           borderColor: '#FFFFFF',
           borderWidth: 0.25,
       },{
        label: "Studierende",
        data: [80.8, 19.2],
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
           stepSize: 20,
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
var chart13 = document.getElementById('ges-2018-b');

var chart = new Chart(chart13, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
    labels: ["Männlich", "Weiblich"],
       datasets: [{
           labels: "WiSe 2018/2019",
           //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
           data: [256, 61],
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
var chart7 = document.getElementById('ges-2019');

var chart = new Chart(chart7, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
    labels: ["Männlich", "Weiblich"],
       datasets: [{
           labels: "2019",
           //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
           data: [57,25],
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
var chart21 = document.getElementById('hBar-ges-2019');

var thisChart = new Chart(chart21, {    // Neues Chart Objekt erstellen
   type: 'horizontalBar',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Männlich", "Weiblich"],
       datasets: [{
           label: "StudienanfängerInnen",
           data: [69.5, 30.5],
           backgroundColor: '#96D115',
           borderColor: '#FFFFFF',
           borderWidth: 0.25,
       },{
        label: "Studierende",
        data: [77.1, 22.9],
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
           stepSize: 20,
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
var chart14 = document.getElementById('ges-2019-b');

var chart = new Chart(chart14, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
    labels: ["Männlich", "Weiblich"],
       datasets: [{
           labels: "WiSe 2019/2020",
           //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
           data: [253, 75],
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
