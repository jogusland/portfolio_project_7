const alertBanner = document.getElementById("alert");
const tasks = 6;

//html for the banner
alertBanner.innerHTML = `
    <div class="alert-banner">
        <p><strong>Alert:</strong> You have <strong>${tasks}</strong> overdue tasks to complete</p>
        <p class="alert-banner-close">x</p>
    </div>
    `;
//alert banner
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none";
    }
});


//line graph
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
 } 
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

 //bar graph

const dailyCanvas = document.getElementById("daily-chart");


const dailyData =  {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
      label: '# of Hits',
      data: [20, 39, 23, 34, 45, 67, 34],
      backgroundColor: '#7477BF',
      borderWidth: 1
}] };

const dailyOptions = {
  scales: {
y: [{ ticks: {
        beginAtZero:true
      }
}] },
  plugins: {
      legend: {
      display: false
    }
} };

let dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});

//doughnut chart

const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
      '#7477BF',
      '#78CF82',
      '#51B6C8'
] }]
};

const mobileOptions = {
  plugins: {
    legend: {
      position: 'right',
      labels: {
        boxWidth: 20,
        fontStyle: 'bold'
      }
} }
};

let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});

//messaging section

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
  // ensure user and message fields are filled out
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
  } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
  } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
  } else {
    alert(`Message successfully sent to: ${user.value}`);
} });


//green dot
// if tasks > 0 display green dot
// if tasks = 0 display nothing

const greenDot = document.getElementById('green-dot');

if (tasks > 0) {
  greenDot.style.display = block;
} else if (tasks === 0){
  greenDot.style.display = "none";
}