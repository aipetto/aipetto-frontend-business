import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import serviceReservationEnumerators from 'src/modules/serviceReservation/serviceReservationEnumerators';
import moment from 'moment';

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
    name: 'customerId',
    label: i18n('entities.serviceReservation.fields.customerId'),
    schema: schemas.relationToOne(
      i18n('entities.serviceReservation.fields.customerId'),
      {},
    ),
  },
  {
    name: 'pet',
    label: i18n('entities.serviceReservation.fields.pet'),
    schema: schemas.relationToOne(
      i18n('entities.serviceReservation.fields.pet'),
      {
        "required": true
      },
    ),
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
    name: 'serviceType',
    label: i18n('entities.serviceReservation.fields.serviceType'),
    schema: schemas.relationToMany(
      i18n('entities.serviceReservation.fields.serviceType'),
      {},
    ),
  },
  {
    name: 'serviceProviderIDs',
    label: i18n('entities.serviceReservation.fields.serviceProviderIDs'),
    schema: schemas.relationToMany(
      i18n('entities.serviceReservation.fields.serviceProviderIDs'),
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
  {
    name: 'totalPrice',
    label: i18n('entities.serviceReservation.fields.totalPrice'),
    schema: schemas.decimal(
      i18n('entities.serviceReservation.fields.totalPrice'),
      {},
    ),
  },
  {
    name: 'totalPriceWithDiscount',
    label: i18n('entities.serviceReservation.fields.totalPriceWithDiscount'),
    schema: schemas.decimal(
      i18n('entities.serviceReservation.fields.totalPriceWithDiscount'),
      {},
    ),
  },
  {
    name: 'discountCode',
    label: i18n('entities.serviceReservation.fields.discountCode'),
    schema: schemas.relationToOne(
      i18n('entities.serviceReservation.fields.discountCode'),
      {},
    ),
  },
  {
    name: 'currency',
    label: i18n('entities.serviceReservation.fields.currency'),
    schema: schemas.relationToOne(
      i18n('entities.serviceReservation.fields.currency'),
      {},
    ),
  },
  {
    name: 'digitalReservationDoc',
    label: i18n('entities.serviceReservation.fields.digitalReservationDoc'),
    schema: schemas.files(
      i18n('entities.serviceReservation.fields.digitalReservationDoc'),
      {},
    ),
  },
  {
    name: 'totalPriceTransportartion',
    label: i18n('entities.serviceReservation.fields.totalPriceTransportartion'),
    schema: schemas.decimal(
      i18n('entities.serviceReservation.fields.totalPriceTransportartion'),
      {},
    ),
  },
  {
    name: 'ratingFromCustomer',
    label: i18n('entities.serviceReservation.fields.ratingFromCustomer'),
    schema: schemas.decimal(
      i18n('entities.serviceReservation.fields.ratingFromCustomer'),
      {},
    ),
  },
  {
    name: 'country',
    label: i18n('entities.serviceReservation.fields.country'),
    schema: schemas.relationToOne(
      i18n('entities.serviceReservation.fields.country'),
      {},
    ),
  },
  {
    name: 'source',
    label: i18n('entities.serviceReservation.fields.source'),
    schema: schemas.enumerator(
      i18n('entities.serviceReservation.fields.source'),
      {
        "options": serviceReservationEnumerators.source
      },
    ),
  },
  {
    name: 'notes',
    label: i18n('entities.serviceReservation.fields.notes'),
    schema: schemas.string(
      i18n('entities.serviceReservation.fields.notes'),
      {},
    ),
  },
  {
    name: 'customerQuestions',
    label: i18n('entities.serviceReservation.fields.customerQuestions'),
    schema: schemas.string(
      i18n('entities.serviceReservation.fields.customerQuestions'),
      {},
    ),
  },
];