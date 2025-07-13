import React from 'react';
import { Filler } from 'chart.js';

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
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

const ChartComponent = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Heart Rate',
        data: [80, 85, 78, 90, 82],
        borderColor: '#e63946',
        backgroundColor: 'rgba(230, 57, 70, 0.2)', // red transparent area
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Heart Rate - Yesterday',
        data: [60, 62, 70, 92, 72],
        borderColor: 'green',
        backgroundColor: 'rgba(0, 128, 0, 0.2)', // green transparent area
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
       scales: {
      y: {
        min: 50,
        max: 100,
        ticks: {
          color: 'white',
        },
        grid: {
          display: true, // ❌ no grid lines
        },
      },
      x: {
        ticks: {
          color: 'white',
        },
        grid: {
          display: false, // ❌ no grid lines
        },
      },
    },
  };

  return (
    <div className="p-6 rounded-xl bg-white shadow-md  hover:shadow-2xl transition-all duration-300 "style={{width:'55%'}} >
      <h2 className="text-xl font-semibold mb-4 text-left">Heart Rate Over Time</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
