'use strict';

let canvasElem = document.getElementById('chart')

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */

let state = new AppState();
state.loadItems();

function renderChart() {

  const labels = [];
  const viewsData = [];
  const clicksData = [];

  for (let i = 0; i < state.allProducts.length; i++) {
    labels.push(state.allProducts[i].name);
    viewsData.push(state.allProducts[i].timesShown);
    clicksData.push(state.allProducts[i].timesClicked);
  }

  // Render chart using Chart.js
  const canvasChart = document.getElementById('chart').getContext('2d');
  const myChart = new Chart(canvasChart, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Views',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          data: viewsData
        },
        {
          label: 'Clicks',
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          data: clicksData
        }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

renderChart();
