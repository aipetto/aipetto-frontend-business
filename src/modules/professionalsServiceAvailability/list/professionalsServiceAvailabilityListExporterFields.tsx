import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.professionalsServiceAvailability.fields.id'),
  },
  {
    name: 'userId',
    label: i18n('entities.professionalsServiceAvailability.fields.userId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'businessId',
    label: i18n('entities.professionalsServiceAvailability.fields.businessId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'serviceType',
    label: i18n('entities.professionalsServiceAvailability.fields.serviceType'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'timeSlot',
    label: i18n('entities.professionalsServiceAvailability.fields.timeSlot'),
    render: exporterRenders.stringArray(),
  },
  {
    name: 'dateAvailabilityStart',
    label: i18n('entities.professionalsServiceAvailability.fields.dateAvailabilityStart'),
  },
  {
    name: 'dateAvailabilityEnd',
    label: i18n('entities.professionalsServiceAvailability.fields.dateAvailabilityEnd'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.professionalsServiceAvailability.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.professionalsServiceAvailability.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
