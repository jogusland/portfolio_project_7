const alertBanner = document.getElementById("alert");

//create the html for the banner
alertBanner.innerHTML = `
    <div class="alert-banner">
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <p class="alert-banner-close">x</p>
    </div>
    `

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alert.style.display = "none";
    }
});

const trafficCanvas = document.getElementById('traffic-chart');

let trafficData = {
    labels: ["4-10", "10-25", "20-5", "5-13", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
      data: [751, 1251, 1200, 2200, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
      backgroundColor: 'rgba(126, 119, 191, .3)',
      borderWidth: 1,
    }]
};

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
      duration: 0
    },
    scales: {
      y: [{
        ticks: {
          beginAtZero: true
    } }]
    }, 
    plugins: {
    legend: {
        display: false
      }
 } };

 let trafficChart = new CharacterData(trafficCanvas, {
     type: 'line',
     data: trafficData,
     options: trafficOptions
 });