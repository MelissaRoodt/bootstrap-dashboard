const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
const yArray = [55, 49, 44, 24, 15];

const data = [{
    x: xArray,
    y: yArray,
    type: "bar"
}];
const layout = { title: "World Wide Wine Production" };

Plotly.newPlot("myPlot", data, layout)
Plotly.newPlot("myPlot2", data, layout)