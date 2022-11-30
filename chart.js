 // Draw the chart for when Charts is loaded.
 google.charts.setOnLoadCallback(drawChart);


 // Callback that draws the pie chart for Sarah's pizza.
 function drawChart() {

   // Create the data table for chart pizza.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Topping');
   data.addColumn('number', 'Slices');
   data.addRows([
     ['Educação', 2000],
     ['Transporte', 500],
     ['Lazer', 230],
     ['Saúde', 50],
     ['Cartão de Credito', 900],
     ['Alimentação', 260]
   ]);

   // Set options for pie chart.
   var options = { 
     title:'Tipos de gastos',
     width: 1000,
     height: 500,
     is3D: true,
     legend: 'labeled',
     pieSliceText: 'value',
     slices: {
       1:{color: 'grey'},
       2:{color: '#a6a6a6'},
       3:{color: 'grey'},
       4:{offset: 0.4},
       5:{color: 'grey'}
     }
   };

   // Instantiate and draw the chart for Sarah's pizza.
   var chart = new google.visualization.PieChart(document.getElementById('chart_pie'));
   chart.draw(data, options);

   // Create the data table for chart line
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Mes');
   data.addColumn('number', 'Gastos');
   data.addRows([
     ['Jan', 800],
     ['Fev', 400],
     ['Mar', 1100],
     ['Abr', 400],
     ['Mai', 500],
     ['Jun', 750],
     ['Jul', 1500],
     ['Ago', 650],
     ['Set', 850],
     ['Out', 400],
     ['Nov', 1000],
     ['Dez', 720]
   ]);

   var options = {
     title: 'Gastos por mês',
     width: 1000,
     height: 500,
     vAxis: {
       format: 'currency', 
       gridlines: {
         count: 4, 
         color: 'transparent'
       }
     },
     curveType: 'function',
     legend: 'none'
     
   }

   var chart = new google.visualization.LineChart(document.getElementById('chart_line'));
   chart.draw(data, options);
 }