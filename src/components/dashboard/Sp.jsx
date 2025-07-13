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

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
);

const Sp = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'SpO₂ (%)',
        data: [96, 97, 95, 98, 96],
        fill: true,
        backgroundColor: 'hsla(355, 50.70%, 70.60%, 0.20)',
        borderColor: 'red',
        pointBackgroundColor: '#e63946',
        // tension: 0.4,  // No curve: straight lines
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: 'white',
        },
      },
    },
    scales: {
      y: {
        min: 90,
        max: 100,
        ticks: {
          color: 'white',
        },
        grid: {
          display: false, // ❌ no grid lines
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
    <div
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
      style={{ width: '40%' }}
    >
      <h2 className="text-xl font-semibold mb-4 text-left">SpO₂ Levels Over Time</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Sp;
