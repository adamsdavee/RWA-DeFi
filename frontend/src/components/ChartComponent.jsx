"use client"

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title);

const ChartComponent= () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', "August", "September"],
    datasets: [
      {
        label: 'Pricing',
        data: [12, 19, 3, 5, 2, 3, 7,20 ,40],
        borderColor: '#61cd81',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };

  return <Line className='bg-white w-full rounded-2xl shadow-2xl' data={data}/>;
};

export default ChartComponent
