import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
);

const ECGSignalChart = () => {
  const data = {
    labels: ['0s', '1s', '2s', '3s', '4s', '5s', '6s'],
    datasets: [
      {
        label: 'ECG Signal (mV)',
        data: [0, 1.2, 0.5, -0.8, 0, 0.9, 0.4],
        fill: true,
        backgroundColor: 'rgba(106, 90, 205, 0.2)', // light purple fill
        borderColor: '#6a5acd',
        pointBackgroundColor: '#6a5acd',
        tension: 0.4, // added for curved lines
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
        labels: {
          color: '#333',
        },
      },
    },
    scales: {
      y: {
        min: -1,
        max: 2,
        ticks: { color: 'white' },
        grid: { color: 'white' },
      },
      x: {
        ticks: { color: 'white' },
        grid: { color: 'white' },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 " style={{width:'50%'}}>
      <h2 className="text-xl font-semibold mb-4 text-left">ECG Signal Pattern</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default ECGSignalChart;
