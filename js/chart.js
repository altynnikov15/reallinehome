$(window).on("resize", function() {
    kendo.resize($("#example"));
});

function createChart() {
    $("#chart").kendoChart({
        title: {
            position: "bottom",
            text: "Test Title"
        },
        legend: {
            visible: false
        },
        chartArea: {
            background: ""
        },
        seriesDefaults: {
            labels: {
                visible: true,
                background: "transparent",
                template: "#= category #: \n #= value#%"
            }
        },
        series: [{
            type: "pie",
            startAngle: 150,
            data: [{
                category: "Germany",
                value: 27,
                color: "#007bc7"
            },{
                category: "Italy",
                value: 23.17,
                color: "#ffb612"
            },{
                category: "France",
                value: 5.91,
                color: "#39b70c"
            },{
                category: "United Kingdom",
                value: 5.26,
                color: "#59b1df"
            },{
                category: "Spain",
                value: 11.64,
                color: "#ca005d"

            },{
                category: "Netherlands",
                value: 30.3,
                color: "#ee720d"
            }]
        }],
        tooltip: {
            visible: true,
            format: "{0}%"
        }
    });
}

$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);