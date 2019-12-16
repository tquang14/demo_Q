function add_data(data) {
    var now = new Date();
    let label = now.format("dd/m/yyyy HH:MM:ss");
    console.log(label);
    //console.log(ten_chart.data.labels);
    addData(ten_chart, label, data);

}

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}