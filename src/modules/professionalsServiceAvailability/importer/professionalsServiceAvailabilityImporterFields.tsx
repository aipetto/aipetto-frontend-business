import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import moment from 'moment';

export default [
  {
    name: 'userId',
    label: i18n('entities.professionalsServiceAvailability.fields.userId'),
    schema: schemas.relationToOne(
      i18n('entities.professionalsServiceAvailability.fields.userId'),
      {},
    ),
  },
  {
    name: 'businessId',
    label: i18n('entities.professionalsServiceAvailability.fields.businessId'),
    schema: schemas.relationToOne(
      i18n('entities.professionalsServiceAvailability.fields.businessId'),
      {},
    ),
  },
  {
    name: 'serviceType',
    label: i18n('entities.professionalsServiceAvailability.fields.serviceType'),
    schema: schemas.relationToOne(
      i18n('entities.professionalsServiceAvailability.fields.serviceType'),
      {},
    ),
  },
  {
    name: 'timeSlot',
    label: i18n('entities.professionalsServiceAvailability.fields.timeSlot'),
    schema: schemas.stringArray(
      i18n('entities.professionalsServiceAvailability.fields.timeSlot'),
      {},
    ),
  },
  {
    name: 'dateAvailabilityStart',
    label: i18n('entities.professionalsServiceAvailability.fields.dateAvailabilityStart'),
    schema: schemas.date(
      i18n('entities.professionalsServiceAvailability.fields.dateAvailabilityStart'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'dateAvailabilityEnd',
    label: i18n('entities.professionalsServiceAvailability.fields.dateAvailabilityEnd'),
    schema: schemas.date(
      i18n('entities.professionalsServiceAvailability.fields.dateAvailabilityEnd'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
];