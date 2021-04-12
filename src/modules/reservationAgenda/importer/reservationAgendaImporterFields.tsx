import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'businessId',
    label: i18n('entities.reservationAgenda.fields.businessId'),
    schema: schemas.relationToOne(
      i18n('entities.reservationAgenda.fields.businessId'),
      {},
    ),
  },
  {
    name: 'timeSlot',
    label: i18n('entities.reservationAgenda.fields.timeSlot'),
    schema: schemas.stringArray(
      i18n('entities.reservationAgenda.fields.timeSlot'),
      {},
    ),
  },
  {
    name: 'serviceType',
    label: i18n('entities.reservationAgenda.fields.serviceType'),
    schema: schemas.relationToOne(
      i18n('entities.reservationAgenda.fields.serviceType'),
      {},
    ),
  },
  {
    name: 'name',
    label: i18n('entities.reservationAgenda.fields.name'),
    schema: schemas.string(
      i18n('entities.reservationAgenda.fields.name'),
      {},
    ),
  },
];