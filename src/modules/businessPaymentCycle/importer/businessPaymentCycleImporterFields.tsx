import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import businessPaymentCycleEnumerators from 'src/modules/businessPaymentCycle/businessPaymentCycleEnumerators';
import moment from 'moment';

export default [
  {
    name: 'businessID',
    label: i18n('entities.businessPaymentCycle.fields.businessID'),
    schema: schemas.relationToOne(
      i18n('entities.businessPaymentCycle.fields.businessID'),
      {},
    ),
  },
  {
    name: 'cycleStart',
    label: i18n('entities.businessPaymentCycle.fields.cycleStart'),
    schema: schemas.date(
      i18n('entities.businessPaymentCycle.fields.cycleStart'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'cycleEnd',
    label: i18n('entities.businessPaymentCycle.fields.cycleEnd'),
    schema: schemas.date(
      i18n('entities.businessPaymentCycle.fields.cycleEnd'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'statusPayment',
    label: i18n('entities.businessPaymentCycle.fields.statusPayment'),
    schema: schemas.enumerator(
      i18n('entities.businessPaymentCycle.fields.statusPayment'),
      {
        "options": businessPaymentCycleEnumerators.statusPayment
      },
    ),
  },
  {
    name: 'totalBusinessServiceReservationPeriod',
    label: i18n('entities.businessPaymentCycle.fields.totalBusinessServiceReservationPeriod'),
    schema: schemas.decimal(
      i18n('entities.businessPaymentCycle.fields.totalBusinessServiceReservationPeriod'),
      {},
    ),
  },
  {
    name: 'totalCommisionCalculated',
    label: i18n('entities.businessPaymentCycle.fields.totalCommisionCalculated'),
    schema: schemas.decimal(
      i18n('entities.businessPaymentCycle.fields.totalCommisionCalculated'),
      {},
    ),
  },
  {
    name: 'commisionRateUsedOnCalculation',
    label: i18n('entities.businessPaymentCycle.fields.commisionRateUsedOnCalculation'),
    schema: schemas.decimal(
      i18n('entities.businessPaymentCycle.fields.commisionRateUsedOnCalculation'),
      {},
    ),
  },
  {
    name: 'businessServiceReservationsUsed',
    label: i18n('entities.businessPaymentCycle.fields.businessServiceReservationsUsed'),
    schema: schemas.relationToMany(
      i18n('entities.businessPaymentCycle.fields.businessServiceReservationsUsed'),
      {},
    ),
  },
  {
    name: 'statusCyclePayment',
    label: i18n('entities.businessPaymentCycle.fields.statusCyclePayment'),
    schema: schemas.enumerator(
      i18n('entities.businessPaymentCycle.fields.statusCyclePayment'),
      {
        "required": true,
        "options": businessPaymentCycleEnumerators.statusCyclePayment
      },
    ),
  },
  {
    name: 'customerID',
    label: i18n('entities.businessPaymentCycle.fields.customerID'),
    schema: schemas.relationToOne(
      i18n('entities.businessPaymentCycle.fields.customerID'),
      {},
    ),
  },
  {
    name: 'paymentMethod',
    label: i18n('entities.businessPaymentCycle.fields.paymentMethod'),
    schema: schemas.enumerator(
      i18n('entities.businessPaymentCycle.fields.paymentMethod'),
      {
        "options": businessPaymentCycleEnumerators.paymentMethod
      },
    ),
  },
  {
    name: 'paymentGatewayReferenceCode',
    label: i18n('entities.businessPaymentCycle.fields.paymentGatewayReferenceCode'),
    schema: schemas.string(
      i18n('entities.businessPaymentCycle.fields.paymentGatewayReferenceCode'),
      {},
    ),
  },
  {
    name: 'paymentGatewayType',
    label: i18n('entities.businessPaymentCycle.fields.paymentGatewayType'),
    schema: schemas.enumerator(
      i18n('entities.businessPaymentCycle.fields.paymentGatewayType'),
      {
        "options": businessPaymentCycleEnumerators.paymentGatewayType
      },
    ),
  },
  {
    name: 'country',
    label: i18n('entities.businessPaymentCycle.fields.country'),
    schema: schemas.relationToOne(
      i18n('entities.businessPaymentCycle.fields.country'),
      {},
    ),
  },
  {
    name: 'currency',
    label: i18n('entities.businessPaymentCycle.fields.currency'),
    schema: schemas.relationToOne(
      i18n('entities.businessPaymentCycle.fields.currency'),
      {},
    ),
  },
];