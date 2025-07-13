import React from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const TemperatureBarChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Temperature (°C)',
        data: [36.8, 37.2, 37.5, 37.0, 36.5],
        backgroundColor: 'orange',
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        // position: 'top',
        display:'false',
        // labels: {
        //   color: 'white',
        // },
      },
    },
    scales: {
      y: {
        min: 35,
        max: 40,
        ticks: {
          stepSize: 1,
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
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 "
      style={{ width: '40%' }}
    >
      <h2 className="text-xl font-semibold mb-4 text-left text-gray-700">
        Body Temperature Trend
      </h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TemperatureBarChart;
