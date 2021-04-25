import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import moment from 'moment';
import serviceReservationEnumerators from 'src/modules/serviceReservation/serviceReservationEnumerators';

export default [
  {
    name: 'date',
    label: i18n('entities.serviceReservation.fields.date'),
    schema: schemas.date(
      i18n('entities.serviceReservation.fields.date'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'businessId',
    label: i18n('entities.serviceReservation.fields.businessId'),
    schema: schemas.relationToOne(
      i18n('entities.serviceReservation.fields.businessId'),
      {},
    ),
  },
  {
    name: 'customerId',
    label: i18n('entities.serviceReservation.fields.customerId'),
    schema: schemas.relationToOne(
      i18n('entities.serviceReservation.fields.customerId'),
      {},
    ),
  },
  {
    name: 'serviceType',
    label: i18n('entities.serviceReservation.fields.serviceType'),
    schema: schemas.relationToMany(
      i18n('entities.serviceReservation.fields.serviceType'),
      {},
    ),
  },
  {
    name: 'time',
    label: i18n('entities.serviceReservation.fields.time'),
    schema: schemas.enumerator(
      i18n('entities.serviceReservation.fields.time'),
      {
        "required": true,
        "options": serviceReservationEnumerators.time
      },
    ),
  },
  {
    name: 'needTransportation',
    label: i18n('entities.serviceReservation.fields.needTransportation'),
    schema: schemas.boolean(
      i18n('entities.serviceReservation.fields.needTransportation'),
      {},
    ),
  },
  {
    name: 'place',
    label: i18n('entities.serviceReservation.fields.place'),
    schema: schemas.relationToOne(
      i18n('entities.serviceReservation.fields.place'),
      {},
    ),
  },
  {
    name: 'status',
    label: i18n('entities.serviceReservation.fields.status'),
    schema: schemas.enumerator(
      i18n('entities.serviceReservation.fields.status'),
      {
        "options": serviceReservationEnumerators.status
      },
    ),
  },
];