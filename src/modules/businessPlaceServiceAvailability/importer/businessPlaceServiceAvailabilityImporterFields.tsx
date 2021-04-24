import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.businessPlaceServiceAvailability.fields.name'),
    schema: schemas.string(
      i18n('entities.businessPlaceServiceAvailability.fields.name'),
      {},
    ),
  },
  {
    name: 'businessId',
    label: i18n('entities.businessPlaceServiceAvailability.fields.businessId'),
    schema: schemas.relationToOne(
      i18n('entities.businessPlaceServiceAvailability.fields.businessId'),
      {},
    ),
  },
  {
    name: 'timeSlot',
    label: i18n('entities.businessPlaceServiceAvailability.fields.timeSlot'),
    schema: schemas.stringArray(
      i18n('entities.businessPlaceServiceAvailability.fields.timeSlot'),
      {},
    ),
  },
  {
    name: 'days',
    label: i18n('entities.businessPlaceServiceAvailability.fields.days'),
    schema: schemas.stringArray(
      i18n('entities.businessPlaceServiceAvailability.fields.days'),
      {},
    ),
  },
  {
    name: 'workOnHolidays',
    label: i18n('entities.businessPlaceServiceAvailability.fields.workOnHolidays'),
    schema: schemas.boolean(
      i18n('entities.businessPlaceServiceAvailability.fields.workOnHolidays'),
      {},
    ),
  },
  {
    name: 'serviceType',
    label: i18n('entities.businessPlaceServiceAvailability.fields.serviceType'),
    schema: schemas.relationToOne(
      i18n('entities.businessPlaceServiceAvailability.fields.serviceType'),
      {},
    ),
  },
  {
    name: 'places',
    label: i18n('entities.businessPlaceServiceAvailability.fields.places'),
    schema: schemas.relationToMany(
      i18n('entities.businessPlaceServiceAvailability.fields.places'),
      {},
    ),
  },
];