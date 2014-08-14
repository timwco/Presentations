requirejs.config({
  baseUrl: "http://cdn.wijmo.com/amd-js/3.20142.45",
    paths: {
      "jquery": "jquery-1.11.1.min",
      "jquery-ui": "jquery-ui-1.11.0.custom.min",
      "jquery.ui": "jquery-ui",
      "jquery.mousewheel": "jquery.mousewheel.min",
      "globalize": "globalize.min"
    }
});

require(["wijmo.wijgrid", "wijmo.wijpiechart"], function () {
    $(document).ready(function () {
        $("#wijgrid").wijgrid({
            allowSorting: true,
            allowPaging: true,
            pageSize: 10,
            data: pdata,
            columns: [
                {headerText: "Last Name"},
                {headerText: "First Name"},
                {headerText: "MRN"},
                {headerText: "Age"},
								{headerText: "Doctor"},
								{headerText: "Hospital"},
								{headerText: "Room"},
								{headerText: "Flag"}
            ]
        });

  	    $("#wijpiechart").wijpiechart({
          radius: 140,
          hint: {
              content: function () {
                  return this.data.label + " : " + Globalize.format(this.value / this.total, "p2");
              }
          },
          seriesList: [{
              label: "Dr. Cushing",
              data: 5,
              offset: 0
          }, {
              label: "Dr. Dandy",
              data: 1,
              offset: 0
          }, {
              label: "Dr. Osler",
              data: 4,
              offset: 0
          }],
          seriesStyles: [{
              fill: "180-rgb(195,255,0)-rgb(175,229,0)",
              stroke: "rgb(175,229,0)",
              "stroke-width": 1.5
          }, {
              fill: "90-rgb(142,222,67)-rgb(127,199,60)",
              stroke: "rgb(127,199,60)",
              "stroke-width": 1.5
          }, {
              fill: "90-rgb(106,171,167)-rgb(95,153,150)",
              stroke: "rgb(95,153,150)",
              "stroke-width": 1.5
          }]
      });

  		$("#wijpiechartr").wijpiechart({
  			radius: 140,
  			hint: {
  					content: function () {
  							return this.data.label + " : " + Globalize.format(this.value / this.total, "p2");
  					}
  			},
  			seriesList: [{
  					label: "Age: 1-20",
  					data: 2,
  					offset: 0
  			}, {
  					label: "Age: 21-30",
  					data: 1,
  					offset: 0
  			}, {
  					label: "Age: 31-50",
  					data: 3,
  					offset: 0
  			},{
  				label: "Age: 51-80",
  				data: 3,
  				offset: 0
  			},{
  				label: "Age: 80+",
  				data: 1,
  				offset: 0
  			}],
  			seriesStyles: [{
              fill: "180-rgb(195,255,0)-rgb(175,229,0)",
              stroke: "rgb(175,229,0)",
              "stroke-width": 1.5
          }, {
              fill: "90-rgb(142,222,67)-rgb(127,199,60)",
              stroke: "rgb(127,199,60)",
              "stroke-width": 1.5
          }, {
              fill: "90-rgb(106,171,167)-rgb(95,153,150)",
              stroke: "rgb(95,153,150)",
              "stroke-width": 1.5
          }, {
              fill: "90-rgb(70,106,133)-rgb(62,95,119)",
              stroke: "rgb(62,95,119)",
              "stroke-width": 1.5
          }, {
              fill: "90-rgb(166,166,166)-rgb(149,149,149)",
              stroke: "rgb(149,149,149)",
              "stroke-width": 1.5
          }]
  	});

	});

});
