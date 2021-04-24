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
    name: 'businessId',
    label: i18n('entities.businessPlaceServiceAvailability.fields.businessId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'timeSlot',
    label: i18n('entities.businessPlaceServiceAvailability.fields.timeSlot'),
    render: exporterRenders.stringArray(),
  },
  {
    name: 'days',
    label: i18n('entities.businessPlaceServiceAvailability.fields.days'),
    render: exporterRenders.stringArray(),
  },
  {
    name: 'workOnHolidays',
    label: i18n('entities.businessPlaceServiceAvailability.fields.workOnHolidays'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'serviceType',
    label: i18n('entities.businessPlaceServiceAvailability.fields.serviceType'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'places',
    label: i18n('entities.businessPlaceServiceAvailability.fields.places'),
    render: exporterRenders.relationToMany(),
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
