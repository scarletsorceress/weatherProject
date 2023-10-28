
// Função para atualizar os dados na página
function updateData(temperature, humidity) {
    document.getElementById("temperature").textContent = temperature;
    document.getElementById("humidity").textContent = humidity;
}

//make the chart with the data from the api
function makeChart() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Temperatura',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: []
            }]
        },
        options: {}
    });
    return chart;
}

// Função para realizar uma requisição GET e atualizar os dados na página
function fetchData() {
    fetch("https://api.thingspeak.com/channels/2317881/feeds.json?api_key=MAU6RGEX5HD66KPF&results=2").then(response => response.json()).then(data => {
            const entry = data.feeds[0];
            const temperature = parseFloat(entry.field1);
            const humidity = parseFloat(entry.field2).toFixed(1); // Manter uma casa decimal
            updateData(temperature + '°C', humidity + '%');
            console.log(temperature);
        })
}



fetchData();
setInterval(fetchData, 1000);
console.log("teste" + fetchData);    

