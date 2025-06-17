const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Balance',
      data: [],
      borderColor: 'lime',
      borderWidth: 2,
      fill: false,
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});

let balance = 100;
let history = [balance];

function getSignal() {
  return Math.random() > 0.5 ? "BUY" : "SELL";
}

function update() {
  const signal = getSignal();
  document.getElementById("signalBox").innerText = `Signal: ${signal}`;

  if (signal === "BUY") balance += 10;
  else balance -= 10;

  history.push(balance);
  chart.data.labels.push(history.length);
  chart.data.datasets[0].data.push(balance);
  chart.update();
}

setInterval(update, 1000);
const marketSelect = document.getElementById('marketSelect');
const timeframeSelect = document.getElementById('timeframeSelect');
const marketInfo = document.getElementById('marketInfo');

function updateMarketInfo() {
  const market = marketSelect.value;
  const timeframe = timeframeSelect.value;
  marketInfo.innerText = `Market: ${market} | Timeframe: ${timeframe}`;
}

marketSelect.addEventListener('change', updateMarketInfo);
timeframeSelect.addEventListener('change', updateMarketInfo);
updateMarketInfo();
