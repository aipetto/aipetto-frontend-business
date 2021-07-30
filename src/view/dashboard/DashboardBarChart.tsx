import React from 'react';
import { Bar } from 'react-chartjs-2';
import { i18n } from 'src/i18n';

const data = {
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
      label: i18n('dashboard.charts.top5Services'),
      backgroundColor: 'rgb(110,231,183)',
      borderColor: 'rgb(135,243,79)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgb(13,227,76)',
      hoverBorderColor: 'rgb(61,248,65)',
      data: [65, 76, 86, 89, 95, 120, 150],
    },
  ],
};

const options = {
  legend: {
    display: true,
  },
  scales: {
    xAxes: [
      {
        display: false,
      },
    ],
    yAxes: [
      {
        display: true,
      },
    ],
  },
};

export default function DashboardBarChart(props) {
  return (
    <Bar
      data={data}
      options={options}
      width={100}
      height={50}
    />
  );
}
