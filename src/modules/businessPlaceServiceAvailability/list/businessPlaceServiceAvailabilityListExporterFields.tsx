import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.businessPlaceServiceAvailability.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.businessPlaceServiceAvailability.fields.name'),
  },
  {
    name: 'places',
    label: i18n('entities.businessPlaceServiceAvailability.fields.places'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'businessId',
    label: i18n('entities.businessPlaceServiceAvailability.fields.businessId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'dateStart',
    label: i18n('entities.businessPlaceServiceAvailability.fields.dateStart'),
  },
  {
    name: 'dateEnd',
    label: i18n('entities.businessPlaceServiceAvailability.fields.dateEnd'),
  },
  {
    name: 'timeSlot',
    label: i18n('entities.businessPlaceServiceAvailability.fields.timeSlot'),
    render: exporterRenders.stringArray(),
  },
  {
    name: 'serviceType',
    label: i18n('entities.businessPlaceServiceAvailability.fields.serviceType'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.businessPlaceServiceAvailability.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.businessPlaceServiceAvailability.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
