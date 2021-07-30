// Donutdiagramm für Hochzugangsberechtigung 2013
var chart1 = document.getElementById('hzb-2013');

var chart = new Chart(chart1, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Allg. HZB", "FH-Reife", "Beruflich Qualifizierte", "Ausl. HZB/Studienkolleg"],
       datasets: [{
           labels: "2013",
           //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
           data: [35, 37, 0, 2],
           backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
            '#96D115',
            '#C3E240',
            '#DAEE8B',
            '#EFF4D3',
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

 //Horizontales Balkendiagramm für Studierende 2013
var chart15 = document.getElementById('hBar-hzb-2013');

var thisChart = new Chart(chart15, {    // Neues Chart Objekt erstellen
   type: 'horizontalBar',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Allg. HZB", "FH-Reife", "Beruflich Qualifizierte", "Ausl. HZB/Studienkolleg"],
       datasets: [{
           label: "StudienanfängerInnen",
           data: [47.3, 50.0, 0.0, 2.7],
           backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
            '#96D115',
            '#C3E240',
            '#DAEE8B',
            '#EFF4D3',
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
              drawBorder: true,
              color: 'white',
           },
           ticks: {
             fontFamily: 'Lato',
             fontSize: 20,
             fontColor: 'white',
             beginAtZero: true,
             align: 'end',
             
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
       tooltips:{
         enabled:true,
         color: 'white',
         callbacks: {
          label: function(tooltipItem, data) {
            return 'StudienanfängerInnen: ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
          }
        }
     },
    }
   });
   
// Donutdiagramm für 2014
var chart2 = document.getElementById('hzb-2014');

var chart = new Chart(chart2, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
    labels: ["Allg. HZB", "FH-Reife", "Beruflich Qualifizierte", "Ausl. HZB/Studienkolleg"],
    datasets: [{
        labels: "2014",
        //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
        data: [40, 38, 0, 2],
        backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
          '#96D115',
          '#C3E240',
          '#DAEE8B',
          '#EFF4D3',
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
var chart16 = document.getElementById('hBar-hzb-2014');

var thisChart = new Chart(chart16, {    // Neues Chart Objekt erstellen
   type: 'horizontalBar',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Allg. HZB", "FH-Reife", "Beruflich Qualifizierte", "Ausl. HZB/Studienkolleg"],
       datasets: [{
           label: "StudienanfängerInnen",
           data: [50.0, 47.5, 0.0, 2.5],
           backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
            '#96D115',
            '#C3E240',
            '#DAEE8B',
            '#EFF4D3',
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
       tooltips:{
         enabled:true,
         color: 'white',
         callbacks: {
          label: function(tooltipItem, data) {
            return 'StudienanfängerInnen: ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
          }
        }
     },
    }
   });
   
   // Donutdiagramm für 2015
var chart3 = document.getElementById('hzb-2015');

var chart = new Chart(chart3, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
    labels: ["Allg. HZB", "FH-Reife", "Beruflich Qualifizierte", "Ausl. HZB/Studienkolleg"],
    datasets: [{
        labels: "2015",
        //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
        data: [40, 45, 0, 5],
        backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
          '#96D115',
          '#C3E240',
          '#DAEE8B',
          '#EFF4D3',
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
var chart17 = document.getElementById('hBar-hzb-2015');

var thisChart = new Chart(chart17, {    // Neues Chart Objekt erstellen
   type: 'horizontalBar',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Allg. HZB", "FH-Reife", "Beruflich Qualifizierte", "Ausl. HZB/Studienkolleg"],
       datasets: [{
           label: "StudienanfängerInnen",
           data: [44.4, 50.0, 0.0, 5.6],
           backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
            '#96D115',
            '#C3E240',
            '#DAEE8B',
            '#EFF4D3',
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
       tooltips:{
         enabled:true,
         color: 'white',
         callbacks: {
          label: function(tooltipItem, data) {
            return 'StudienanfängerInnen: ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
          }
        }
     },
    }
   });
   
   // Donutdiagramm für 2016
var chart4 = document.getElementById('hzb-2016');

var chart = new Chart(chart4, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
    labels: ["Allg. HZB", "FH-Reife", "Beruflich Qualifizierte", "Ausl. HZB/Studienkolleg"],
    datasets: [{
        labels: "2016",
        //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
        data: [46, 36, 0, 3],
        backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
          '#96D115',
          '#C3E240',
          '#DAEE8B',
          '#EFF4D3',
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
var chart18 = document.getElementById('hBar-hzb-2016');

var thisChart = new Chart(chart18, {    // Neues Chart Objekt erstellen
   type: 'horizontalBar',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Allg. HZB", "FH-Reife", "Beruflich Qualifizierte", "Ausl. HZB/Studienkolleg"],
       datasets: [{
           label: "StudienanfängerInnen",
           data: [54.1, 42.4, 0.0, 3.5],
           backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
            '#96D115',
            '#C3E240',
            '#DAEE8B',
            '#EFF4D3',
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
       tooltips:{
         enabled:true,
         color: 'white',
         callbacks: {
          label: function(tooltipItem, data) {
            return 'StudienanfängerInnen: ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
          }
        }
     },
    }
   });
   
// Donutdiagramm für 2017
var chart5 = document.getElementById('hzb-2017');

var chart = new Chart(chart5, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
    labels: ["Allg. HZB", "FH-Reife", "Beruflich Qualifizierte", "Ausl. HZB/Studienkolleg"],
    datasets: [{
        labels: "2017",
        //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
        data: [35, 35, 8, 3],
        backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
          '#96D115',
          '#C3E240',
          '#DAEE8B',
          '#EFF4D3',
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
var chart19 = document.getElementById('hBar-hzb-2017');

var thisChart = new Chart(chart19, {    // Neues Chart Objekt erstellen
   type: 'horizontalBar',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Allg. HZB", "FH-Reife", "Beruflich Qualifizierte", "Ausl. HZB/Studienkolleg"],
       datasets: [{
           label: "StudienanfängerInnen",
           data: [43.2, 43.2, 9.9, 3.7],
           backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
            '#96D115',
            '#C3E240',
            '#DAEE8B',
            '#EFF4D3',
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
       tooltips:{
         enabled:true,
         color: 'white',
         callbacks: {
          label: function(tooltipItem, data) {
            return 'StudienanfängerInnen: ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
          }
        }
     },
    }
   });

      // Donutdiagramm für 2016
var chart6 = document.getElementById('hzb-2018');

var chart = new Chart(chart6, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
    labels: ["Allg. HZB", "FH-Reife", "Beruflich Qualifizierte", "Ausl. HZB/Studienkolleg"],
    datasets: [{
        labels: "2018",
        //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
        data: [34, 26, 3, 2],
        backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
          '#96D115',
          '#C3E240',
          '#DAEE8B',
          '#EFF4D3',
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
var chart20 = document.getElementById('hBar-hzb-2018');

var thisChart = new Chart(chart20, {    // Neues Chart Objekt erstellen
   type: 'horizontalBar',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Allg. HZB", "FH-Reife", "Beruflich Qualifizierte", "Ausl. HZB/Studienkolleg"],
       datasets: [{
           label: "StudienanfängerInnen",
           data: [52.3, 40.0, 4.6, 3.1],
           backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
            '#96D115',
            '#C3E240',
            '#DAEE8B',
            '#EFF4D3',
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
       tooltips:{
         enabled:true,
         color: 'white',
         callbacks: {
          label: function(tooltipItem, data) {
            return 'StudienanfängerInnen: ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
          }
        }
     },
    }
   });

      // Donutdiagramm für 2016
var chart7 = document.getElementById('hzb-2019');

var chart = new Chart(chart7, {    // Neues Chart Objekt erstellen
   type: 'doughnut',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
    labels: ["Allg. HZB", "FH-Reife", "Beruflich Qualifizierte", "Ausl. HZB/Studienkolleg"],
    datasets: [{
        labels: "2019",
        //fill: false, // Fill, damit das Line Chart nicht gefüllt ist 
        data: [43, 31, 2, 6],
        backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
          '#96D115',
          '#C3E240',
          '#DAEE8B',
          '#EFF4D3',
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
var chart21 = document.getElementById('hBar-hzb-2019');

var thisChart = new Chart(chart21, {    // Neues Chart Objekt erstellen
   type: 'horizontalBar',  // Typen: bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data: {
       labels: ["Allg. HZB", "FH-Reife", "Beruflich Qualifizierte", "Ausl. HZB/Studienkolleg"],
       datasets: [{
           label: "StudienanfängerInnen",
           data: [52.4, 37.8, 2.4, 7.3],
           backgroundColor: [ // Veranlasst, dass jeder Balken seine eigene Farbe hat 
            '#96D115',
            '#C3E240',
            '#DAEE8B',
            '#EFF4D3',
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
       tooltips:{
         enabled:true,
         color: 'white',
         callbacks: {
          label: function(tooltipItem, data) {
            return 'StudienanfängerInnen: ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
          }
        }
     },
    }
   });
