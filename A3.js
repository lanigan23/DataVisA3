var timeout;
var year = "2014/2015";

var refUrl = [];
refUrl[0] =
  "https://docs.google.com/spreadsheet/tq?key=1Gjb9uVgQAMVYW0HVKFlH6jrto7Gv9QPWEj3hqZEJQ58&gid=0";
refUrl[1] =
  "https://docs.google.com/spreadsheet/tq?key=1Pm2M6leKSy2RWaBoafB9aESqRQVUoBjFT44x3oAtxpE&gid=0";
refUrl[2] =
  "https://docs.google.com/spreadsheet/tq?key=1l8W10MJBLkY0rPBgn8EOGAu74DobXgrY1ZZ3xCt7q1U&gid=0";
refUrl[3] =
  "https://docs.google.com/spreadsheet/tq?key=1tiGYrXtHj9St2gUEf9TOrIzlTtEBqtwputdkg_CvuTM&gid=0";
refUrl[4] =
  "https://docs.google.com/spreadsheet/tq?key=1_ohauuAkq5QAmP8SES2J-3RKAnJ3VlQy5hTj5dH92LU&gid=0";

var winLossUrl = [];
winLossUrl[0] =
  "https://docs.google.com/spreadsheet/tq?key=1zx8pyVF10lwgatJLEsaTQRFThJH--H-8TOTG9GZRws8&gid=0";
winLossUrl[1] =
  "https://docs.google.com/spreadsheet/tq?key=1J1gF2W8cUC6mp2L7MsgoibKF6kvyUTXLdjb6yo6fPVo&gid=0";
winLossUrl[2] =
  "https://docs.google.com/spreadsheet/tq?key=12F7FDw5U0p2aqKj6l3CL3IbxJkugWvMHWZr5vaAUy10&gid=0";
winLossUrl[3] =
  "https://docs.google.com/spreadsheet/tq?key=1POnTO61SUhC0utCvy8Pyh4H2DgYtaRW4VficOfSpoyg&gid=0";
winLossUrl[4] =
  "https://docs.google.com/spreadsheet/tq?key=12BQkdkfq8CfWtgXb0Rdk8VYZnnmHciStC2avBgPMH6E&gid=0";

var winLossDowUrl = [];
winLossDowUrl[0] =
  "https://docs.google.com/spreadsheet/tq?key=1YGB0H-Ra_fQ74O-qComccL-v7VRPwTkG7Ft5aob6_Ug&gid=0";
winLossDowUrl[1] =
  "https://docs.google.com/spreadsheet/tq?key=16VAlq2l6VLTfnrEQPEKxu2tEdTL6BiWTWNdrb_Lfo5w&gid=0";
winLossDowUrl[2] =
  "https://docs.google.com/spreadsheet/tq?key=1IBcBgrAooNbR2n1fLHeuLbomzj20EqCNhFN1Q2Oo1iM&gid=0";
winLossDowUrl[3] =
  "https://docs.google.com/spreadsheet/tq?key=182aQ_S4kgsJaAE6zvoTQ0bGTzj9GRpzJH2qmSrz3PgE&gid=0";
winLossDowUrl[4] =
  "https://docs.google.com/spreadsheet/tq?key=1RCi23BlktxDPVyZJ3uWV2c15cBzfyxsVravHJKzR0_E&gid=0";

var conversionUrl = [];
conversionUrl[0] =
  "https://docs.google.com/spreadsheet/tq?key=1dRIz_PZ8qTh4rCFetqJtsqhQ5SmuEX7H-Rw2CO72v9E&gid=0";
conversionUrl[1] =
  "https://docs.google.com/spreadsheet/tq?key=14u9eoA5QugDFRfwAfPdpJcMfmUpBS13-1BOXQZIz1_w&gid=0";
conversionUrl[2] =
  "https://docs.google.com/spreadsheet/tq?key=1A4h5QC9SfZoYOxjjrAd7IcQKRlijnMZjFEoLpfAAziA&gid=0";
conversionUrl[3] =
  "https://docs.google.com/spreadsheet/tq?key=19z-btddomcvUNj8TDAc1MPMKcjuBstQupiqfU3-AdnA&gid=0";
conversionUrl[4] =
  "https://docs.google.com/spreadsheet/tq?key=1D--H_ilTv_5z2zf_WKscf3R44U6WeJUneMepup0wIpo&gid=0";

var goalsUrl = [];
goalsUrl[0] =
  "https://docs.google.com/spreadsheet/tq?key=1i2MWgB9YepiKh7IGQVUCIaA-5M_LY4QQKVOOSJI1Vvg&gid=0";
goalsUrl[1] =
  "https://docs.google.com/spreadsheet/tq?key=1yR1OptXUudXaySSvRPmYRefeHt6Li_0ykeaqgt0YjgI&gid=0";
goalsUrl[2] =
  "https://docs.google.com/spreadsheet/tq?key=13Qnz-3rEY3bbUcJDhdO9Yi2ieDinbyidH5QTSQW-mVs&gid=0";
goalsUrl[3] =
  "https://docs.google.com/spreadsheet/tq?key=10czy4l-IkNPJ8_jhvMD3SqvV9-p9COoBJYJLjLv2Vsg&gid=0";
goalsUrl[4] =
  "https://docs.google.com/spreadsheet/tq?key=1KM860klOvT21XjrAC_cRLp08qc1ikwonwvhVPglekRM&gid=0";

document.getElementById("currentSeason").innerHTML = year;
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function loading() {
  timeout = setTimeout(drawChart(), 3000);
}

function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches(".dropbtn")) {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
  }
};

function drawChart() {
  var queryRef, queryWL, queryWLDow, queryCon, queryGoals;
  if (year == "2014/2015") {
    queryRef = new google.visualization.Query(refUrl[0]);
    queryWL = new google.visualization.Query(winLossUrl[0]);
    queryWLDow = new google.visualization.Query(winLossDowUrl[0]);
    queryCon = new google.visualization.Query(conversionUrl[0]);
    queryGoals = new google.visualization.Query(goalsUrl[0]);
  } else if (year == "2015/2016") {
    queryRef = new google.visualization.Query(refUrl[1]);
    queryWL = new google.visualization.Query(winLossUrl[1]);
    queryWLDow = new google.visualization.Query(winLossDowUrl[1]);
    queryCon = new google.visualization.Query(conversionUrl[1]);
    queryGoals = new google.visualization.Query(goalsUrl[1]);
  } else if (year == "2016/2017") {
    queryRef = new google.visualization.Query(refUrl[2]);
    queryWL = new google.visualization.Query(winLossUrl[2]);
    queryWLDow = new google.visualization.Query(winLossDowUrl[2]);
    queryCon = new google.visualization.Query(conversionUrl[2]);
    queryGoals = new google.visualization.Query(goalsUrl[2]);
  } else if (year == "2017/2018") {
    queryRef = new google.visualization.Query(refUrl[3]);
    queryWL = new google.visualization.Query(winLossUrl[3]);
    queryWLDow = new google.visualization.Query(winLossDowUrl[3]);
    queryCon = new google.visualization.Query(conversionUrl[3]);
    queryGoals = new google.visualization.Query(goalsUrl[3]);
  } else if (year == "2018/2019") {
    queryRef = new google.visualization.Query(refUrl[4]);
    queryWL = new google.visualization.Query(winLossUrl[4]);
    queryWLDow = new google.visualization.Query(winLossDowUrl[4]);
    queryCon = new google.visualization.Query(conversionUrl[4]);
    queryGoals = new google.visualization.Query(goalsUrl[4]);
  }
  queryRef.send(handleQueryResponseRef);
  queryWL.send(handleQueryResponseWL);
  queryWLDow.send(handleQueryResponseWLDow);
  queryCon.send(handleQueryResponseCon);
  queryGoals.send(handleQueryResponseGoals);
}

function handleQueryResponseRef(response) {
  if (response.isError()) {
    alert(
      "Error in  query: " +
        response.getMessage() +
        " " +
        response.getDetailedMessage()
    );
  }

  var data = response.getDataTable();

  var options = {
    width: 1500,
    height: 400,
    legend: { position: "right", maxLines: 3 },
    bar: { groupWidth: "75%" },
    isStacked: true,
    colors: ["yellow", "red"],
    animation: {
      duration: 1000,
      easing: "inAndOut",
      startup: true
    },
    vAxes: {
      0:{logScale:false, title: "Number Of Yellow/Red Cards"},
    }
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById("refChart")
  );
  chart.draw(data, options);
  document.getElementById("loader").style.display = "none";
}

function handleQueryResponseWL(response) {
  if (response.isError()) {
    alert(
      "Error in query: " +
        response.getMessage() +
        " " +
        response.getDetailedMessage()
    );
  }

  var data = response.getDataTable();

  var columnsTable = new google.visualization.DataTable();
  columnsTable.addColumn('number', 'colIndex');
  columnsTable.addColumn('string', 'colLabel');
  var initState = {selectedValues: []};
  for (var i = 1; i < data.getNumberOfColumns(); i++) {
    columnsTable.addRow([i, data.getColumnLabel(i)]);
  }
  initState.selectedValues.push(data.getColumnLabel(1));
  initState.selectedValues.push(data.getColumnLabel(2));
  initState.selectedValues.push(data.getColumnLabel(3));

  var chart = new google.visualization.ChartWrapper({
    chartType: 'ComboChart',
    containerId: 'winLossChart',
    dataTable: data,
    options: {
      curveType: "function",
      legend: { position: "right" },
      width: 1500,
      height: 400,
      animation: {
        duration: 1000,
        easing: "inAndOut",
        startup: true
      },
      vAxes: {
        0:{logScale:false, maxValue: 1, title: "Probability", format: 'decimal'}
      },
      seriesType: 'line',
      series: {
        0: {type:'steppedArea', color: 'green'},
        1: {type:'steppedArea', color: 'yellow'},
        2: {type:'steppedArea', color: 'red'},
       }
    }
  });

  var columnFilter = new google.visualization.ControlWrapper({
    controlType: 'CategoryFilter',
    containerId: 'wlWrapper',
    dataTable: columnsTable,
    options: {
        filterColumnLabel: 'colLabel',
        useFormatedValue: 'true',
        ui: {
            label: 'BookMakers',
            allowTyping: false,
            allowMultiple: true,
            allowNone: false,
            selectedValuesLayout: 'aside'
        }
    },
    state: initState
  });

  function setChartView () {
    var state = columnFilter.getState();
    var row;
    var view = {
      columns: [0]
    };
    for (var i = 0; i < state.selectedValues.length; i++) {
      row = columnsTable.getFilteredRows([{column: 1, value: state.selectedValues[i]}])[0];
      view.columns.push(columnsTable.getValue(row, 0));
    }
    view.columns.sort(function (a, b) {
      return (a - b);
    });
    chart.setView(view);
    chart.draw();
  }

  google.visualization.events.addListener(columnFilter, 'statechange', setChartView);
  setChartView();
  columnFilter.draw();  
  document.getElementById("loader").style.display = "none";
}

function handleQueryResponseWLDow(response) {
  if (response.isError()) {
    alert(
      "Error in query: " +
        response.getMessage() +
        " " +
        response.getDetailedMessage()
    );
  }

  var data = response.getDataTable();

  var view = new google.visualization.DataView(data);
  view.setColumns([
    0,
    1,
    {
      calc: function(datatable, row) {
        var total = data.getValue(row, 1);
        var wins = data.getValue(row, 1);
        total += data.getValue(row, 2);
        total += data.getValue(row, 3);
        return Math.floor((wins / total) * 100);
      },
      role: "annotation",
      type: "number"
    },
    2,
    3
  ]);

  var options = {
    width: 1500,
    height: 400,
    legend: { position: "right", maxLines: 3 },
    bar: { groupWidth: "75%" },
    isStacked: true,
    colors: ["green", "yellow", "red"],
    animation: {
      duration: 1000,
      easing: "inAndOut",
      startup: true
    },
    vAxes: {
      0:{logScale:false, title: "Number Of Wins/Draws/Losses"},
    }
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById("winLossDowChart")
  );
  chart.draw(view, options);
  document.getElementById("loader").style.display = "none";
}

function handleQueryResponseCon(response) {
  if (response.isError()) {
    alert(
      "Error in query: " +
        response.getMessage() +
        " " +
        response.getDetailedMessage()
    );
  }

  var data = response.getDataTable();

  var columnsTable = new google.visualization.DataTable();
  columnsTable.addColumn('number', 'colIndex');
  columnsTable.addColumn('string', 'colLabel');
  var initState = {selectedValues: []};
  for (var i = 1; i < data.getNumberOfColumns(); i++) {
    columnsTable.addRow([i, data.getColumnLabel(i)]);
  }
  initState.selectedValues.push(data.getColumnLabel(1));

  var chart = new google.visualization.ChartWrapper({
    chartType: 'PieChart',
    containerId: 'conversionChart',
    dataTable: data,
    options: {
      pieHole: 0.4,
      width: 1000,
      height: 400,
      animation: {
        duration: 1000,
        easing: "inAndOut",
        startup: true
      }
    }
  });

  var columnFilter = new google.visualization.ControlWrapper({
    controlType: 'CategoryFilter',
    containerId: 'wlWrapperPie',
    dataTable: columnsTable,
    options: {
        filterColumnLabel: 'colLabel',
        useFormatedValue: 'true',
        ui: {
            label: 'Opponents',
            allowTyping: false,
            allowMultiple: false,
            allowNone: false,
            selectedValuesLayout: 'aside'
        }
    },
    state: initState
  });

  function setChartView () {
    var state = columnFilter.getState();
    var row;
    var view = {
      columns: [0]
    };
    for (var i = 0; i < state.selectedValues.length; i++) {
      row = columnsTable.getFilteredRows([{column: 1, value: state.selectedValues[i]}])[0];
      view.columns.push(columnsTable.getValue(row, 0));
    }
    view.columns.sort(function (a, b) {
      return (a - b);
    });
    chart.setView(view);
    chart.draw();
  }

  google.visualization.events.addListener(columnFilter, 'statechange', setChartView);
  setChartView();
  columnFilter.draw(); 
  document.getElementById("loader").style.display = "none";
}

function handleQueryResponseGoals(response) {
  if (response.isError()) {
    alert(
      "Error in query: " +
        response.getMessage() +
        " " +
        response.getDetailedMessage()
    );
  }

  var data = response.getDataTable();
  var options = {
    curveType: "function",
    legend: { position: "below" },
    width: 1500,
    height: 400,
    animation: {
      duration: 1000,
      easing: "inAndOut",
      startup: true
    },
    vAxes: {
        0:{logScale:false, maxValue: 1, title: "Probability"},
        1:{logScale:false, title: "Number Of Goals"}
    },
    seriesType: 'line',
    series: {
        0: {targetAxisIndex:0},
        1: {targetAxisIndex:0},
        2: {color: 'green', type: 'steppedArea', targetAxisIndex:1}}
  };

  var chart = new google.visualization.ComboChart(
    document.getElementById("goalsOddsChart")
  );

  chart.draw(data, options);
  document.getElementById("loader").style.display = "none";
}

function setYear1415() {
  document.getElementById("loader").style.display = "inline";
  year = "2014/2015";
  document.getElementById("currentSeason").innerHTML = year;
  loading();
}

function setYear1516() {
  document.getElementById("loader").style.display = "inline";
  year = "2015/2016";
  document.getElementById("currentSeason").innerHTML = year;
  loading();
}

function setYear1617() {
  document.getElementById("loader").style.display = "inline";
  year = "2016/2017";
  document.getElementById("currentSeason").innerHTML = year;
  loading();
}

function setYear1718() {
  document.getElementById("loader").style.display = "inline";
  year = "2017/2018";
  document.getElementById("currentSeason").innerHTML = year;
  loading();
}

function setYear1819() {
  document.getElementById("loader").style.display = "inline";
  year = "2018/2019";
  document.getElementById("currentSeason").innerHTML = year;
  loading();
}
