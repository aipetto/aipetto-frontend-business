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
    name: 'businessId',
    label: i18n('entities.serviceReservation.fields.businessId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'customerId',
    label: i18n('entities.serviceReservation.fields.customerId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'serviceType',
    label: i18n('entities.serviceReservation.fields.serviceType'),
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
