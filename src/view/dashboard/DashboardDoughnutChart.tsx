import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { i18n } from 'src/i18n';

const data = {
  labels: [
    i18n('dashboard.charts.businessPlace1'),
    i18n('dashboard.charts.businessPlace2'),
    i18n('dashboard.charts.businessPlace3'),
  ],
  datasets: [
    {
      data: [800, 50, 100],
      backgroundColor: ['#6ee7b7', '#36A2EB', '#ffce56'],
      hoverBackgroundColor: [
        '#6ee7b7',
        '#36A2EB',
        '#FFCE56',
      ],
    },
  ],
};

export default function DashboardDoughnutChart(props) {
  return <Doughnut data={data} />;
}
