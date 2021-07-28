import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.businessPaymentCycle.fields.id'),
  },
  {
    name: 'businessID',
    label: i18n('entities.businessPaymentCycle.fields.businessID'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'cycleStart',
    label: i18n('entities.businessPaymentCycle.fields.cycleStart'),
  },
  {
    name: 'cycleEnd',
    label: i18n('entities.businessPaymentCycle.fields.cycleEnd'),
  },
  {
    name: 'statusPayment',
    label: i18n('entities.businessPaymentCycle.fields.statusPayment'),
  },
  {
    name: 'totalBusinessServiceReservationPeriod',
    label: i18n('entities.businessPaymentCycle.fields.totalBusinessServiceReservationPeriod'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'totalCommisionCalculated',
    label: i18n('entities.businessPaymentCycle.fields.totalCommisionCalculated'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'commisionRateUsedOnCalculation',
    label: i18n('entities.businessPaymentCycle.fields.commisionRateUsedOnCalculation'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'businessServiceReservationsUsed',
    label: i18n('entities.businessPaymentCycle.fields.businessServiceReservationsUsed'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'statusCyclePayment',
    label: i18n('entities.businessPaymentCycle.fields.statusCyclePayment'),
  },
  {
    name: 'customerID',
    label: i18n('entities.businessPaymentCycle.fields.customerID'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'paymentMethod',
    label: i18n('entities.businessPaymentCycle.fields.paymentMethod'),
  },
  {
    name: 'paymentGatewayReferenceCode',
    label: i18n('entities.businessPaymentCycle.fields.paymentGatewayReferenceCode'),
  },
  {
    name: 'paymentGatewayType',
    label: i18n('entities.businessPaymentCycle.fields.paymentGatewayType'),
  },
  {
    name: 'country',
    label: i18n('entities.businessPaymentCycle.fields.country'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'currency',
    label: i18n('entities.businessPaymentCycle.fields.currency'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.businessPaymentCycle.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.businessPaymentCycle.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
