import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.reservationAgenda.fields.id'),
  },
  {
    name: 'businessId',
    label: i18n('entities.reservationAgenda.fields.businessId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'timeSlot',
    label: i18n('entities.reservationAgenda.fields.timeSlot'),
    render: exporterRenders.stringArray(),
  },
  {
    name: 'serviceType',
    label: i18n('entities.reservationAgenda.fields.serviceType'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'name',
    label: i18n('entities.reservationAgenda.fields.name'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.reservationAgenda.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.reservationAgenda.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
