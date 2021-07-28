import React from 'react';
import { Bar } from 'react-chartjs-2';
import { i18n } from 'src/i18n';

const options = {
  responsive: true,
  tooltips: {
    mode: 'label',
  },
  elements: {
    line: {
      fill: false,
    },
  },
  scales: {
    xAxes: [
      {
        display: false,
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        type: 'linear',
        display: false,
        position: 'left',
        id: 'y-axis-1',
        gridLines: {
          display: false,
        },
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          display: false,
        },
      },
    ],
  },
};

const data2 = {
  labels: [
    i18n('businessSurvey.checkboxChoices.vacunacionDeGato'),
    i18n('businessSurvey.checkboxChoices.castracionDePerros'),
    i18n('businessSurvey.checkboxChoices.castracionDeGatos'),
    i18n('businessSurvey.checkboxChoices.analisisDeSangre'),
    i18n('businessSurvey.checkboxChoices.ecografia'),
    i18n('businessSurvey.checkboxChoices.radiografia'),
    i18n('businessSurvey.checkboxChoices.urgencias'),
  ],
  datasets: [
    {
      label: i18n('dashboard.charts.reservations'),
      type: 'line',
      data: [51, 65, 90, 120, 133, 155, 160],
      fill: false,
      borderColor: '#EC932F',
      backgroundColor: '#EC932F',
      pointBorderColor: '#EC932F',
      pointBackgroundColor: '#EC932F',
      pointHoverBackgroundColor: '#EC932F',
      pointHoverBorderColor: '#EC932F',
      yAxisID: 'y-axis-2',
    },
  ],
};

export default function DashboardMixChartTwo(props) {
  return <Bar data={data2} options={options} />;
}
