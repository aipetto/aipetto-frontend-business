import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import moment from "moment";

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
    name: 'places',
    label: i18n('entities.businessPlaceServiceAvailability.fields.places'),
    schema: schemas.relationToMany(
      i18n('entities.businessPlaceServiceAvailability.fields.places'),
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
    name: 'dateStart',
    label: i18n('entities.businessPlaceServiceAvailability.fields.dateStart'),
    schema: schemas.date(
      i18n('entities.businessPlaceServiceAvailability.fields.dateStart'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'dateEnd',
    label: i18n('entities.businessPlaceServiceAvailability.fields.dateEnd'),
    schema: schemas.date(
      i18n('entities.businessPlaceServiceAvailability.fields.dateEnd'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
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
    name: 'serviceType',
    label: i18n('entities.businessPlaceServiceAvailability.fields.serviceType'),
    schema: schemas.relationToOne(
      i18n('entities.businessPlaceServiceAvailability.fields.serviceType'),
      {},
    ),
  },
];