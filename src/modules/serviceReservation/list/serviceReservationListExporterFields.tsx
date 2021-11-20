import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.serviceReservation.fields.id'),
  },
  {
    name: 'date',
    label: i18n('entities.serviceReservation.fields.date'),
  },
  {
    name: 'customerId',
    label: i18n('entities.serviceReservation.fields.customerId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'pet',
    label: i18n('entities.serviceReservation.fields.pet'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'businessId',
    label: i18n('entities.serviceReservation.fields.businessId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'serviceType',
    label: i18n('entities.serviceReservation.fields.serviceType'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'serviceProviderIDs',
    label: i18n('entities.serviceReservation.fields.serviceProviderIDs'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'time',
    label: i18n('entities.serviceReservation.fields.time'),
  },
  {
    name: 'needTransportation',
    label: i18n('entities.serviceReservation.fields.needTransportation'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'place',
    label: i18n('entities.serviceReservation.fields.place'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'status',
    label: i18n('entities.serviceReservation.fields.status'),
  },
  {
    name: 'totalPrice',
    label: i18n('entities.serviceReservation.fields.totalPrice'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'totalPriceWithDiscount',
    label: i18n('entities.serviceReservation.fields.totalPriceWithDiscount'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'discountCode',
    label: i18n('entities.serviceReservation.fields.discountCode'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'currency',
    label: i18n('entities.serviceReservation.fields.currency'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'digitalReservationDoc',
    label: i18n('entities.serviceReservation.fields.digitalReservationDoc'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'totalPriceTransportartion',
    label: i18n('entities.serviceReservation.fields.totalPriceTransportartion'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'ratingFromCustomer',
    label: i18n('entities.serviceReservation.fields.ratingFromCustomer'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'country',
    label: i18n('entities.serviceReservation.fields.country'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'source',
    label: i18n('entities.serviceReservation.fields.source'),
  },
  {
    name: 'notes',
    label: i18n('entities.serviceReservation.fields.notes'),
  },
  {
    name: 'customerQuestions',
    label: i18n('entities.serviceReservation.fields.customerQuestions'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.serviceReservation.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.serviceReservation.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
