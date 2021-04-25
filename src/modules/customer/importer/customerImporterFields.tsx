import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import customerEnumerators from 'src/modules/customer/customerEnumerators';
import moment from 'moment';

export default [
  {
    name: 'businessId',
    label: i18n('entities.customer.fields.businessId'),
    schema: schemas.relationToOne(
      i18n('entities.customer.fields.businessId'),
      {},
    ),
  },
  {
    name: 'source',
    label: i18n('entities.customer.fields.source'),
    schema: schemas.enumerator(
      i18n('entities.customer.fields.source'),
      {
        "options": customerEnumerators.source
      },
    ),
  },
  {
    name: 'userId',
    label: i18n('entities.customer.fields.userId'),
    schema: schemas.relationToOne(
      i18n('entities.customer.fields.userId'),
      {},
    ),
  },
  {
    name: 'name',
    label: i18n('entities.customer.fields.name'),
    schema: schemas.string(
      i18n('entities.customer.fields.name'),
      {
        "required": true,
        "min": 2,
        "max": 255
      },
    ),
  },
  {
    name: 'surname',
    label: i18n('entities.customer.fields.surname'),
    schema: schemas.string(
      i18n('entities.customer.fields.surname'),
      {},
    ),
  },
  {
    name: 'birthdate',
    label: i18n('entities.customer.fields.birthdate'),
    schema: schemas.date(
      i18n('entities.customer.fields.birthdate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'gender',
    label: i18n('entities.customer.fields.gender'),
    schema: schemas.enumerator(
      i18n('entities.customer.fields.gender'),
      {
        "options": customerEnumerators.gender
      },
    ),
  },
  {
    name: 'whatsApp',
    label: i18n('entities.customer.fields.whatsApp'),
    schema: schemas.string(
      i18n('entities.customer.fields.whatsApp'),
      {},
    ),
  },
  {
    name: 'phoneNumber',
    label: i18n('entities.customer.fields.phoneNumber'),
    schema: schemas.string(
      i18n('entities.customer.fields.phoneNumber'),
      {},
    ),
  },
  {
    name: 'address',
    label: i18n('entities.customer.fields.address'),
    schema: schemas.string(
      i18n('entities.customer.fields.address'),
      {},
    ),
  },
  {
    name: 'zipCode',
    label: i18n('entities.customer.fields.zipCode'),
    schema: schemas.string(
      i18n('entities.customer.fields.zipCode'),
      {},
    ),
  },
  {
    name: 'city',
    label: i18n('entities.customer.fields.city'),
    schema: schemas.string(
      i18n('entities.customer.fields.city'),
      {},
    ),
  },
  {
    name: 'state',
    label: i18n('entities.customer.fields.state'),
    schema: schemas.string(
      i18n('entities.customer.fields.state'),
      {},
    ),
  },
  {
    name: 'country',
    label: i18n('entities.customer.fields.country'),
    schema: schemas.string(
      i18n('entities.customer.fields.country'),
      {},
    ),
  },
  {
    name: 'billingAddressStreet',
    label: i18n('entities.customer.fields.billingAddressStreet'),
    schema: schemas.string(
      i18n('entities.customer.fields.billingAddressStreet'),
      {},
    ),
  },
  {
    name: 'billingAddressCity',
    label: i18n('entities.customer.fields.billingAddressCity'),
    schema: schemas.string(
      i18n('entities.customer.fields.billingAddressCity'),
      {},
    ),
  },
  {
    name: 'billingAddressState',
    label: i18n('entities.customer.fields.billingAddressState'),
    schema: schemas.string(
      i18n('entities.customer.fields.billingAddressState'),
      {},
    ),
  },
  {
    name: 'billingAddressZipCode',
    label: i18n('entities.customer.fields.billingAddressZipCode'),
    schema: schemas.string(
      i18n('entities.customer.fields.billingAddressZipCode'),
      {},
    ),
  },
  {
    name: 'billingAddressCountry',
    label: i18n('entities.customer.fields.billingAddressCountry'),
    schema: schemas.string(
      i18n('entities.customer.fields.billingAddressCountry'),
      {},
    ),
  },
  {
    name: 'shippingAddressStreet',
    label: i18n('entities.customer.fields.shippingAddressStreet'),
    schema: schemas.string(
      i18n('entities.customer.fields.shippingAddressStreet'),
      {},
    ),
  },
  {
    name: 'shippingAddressCity',
    label: i18n('entities.customer.fields.shippingAddressCity'),
    schema: schemas.string(
      i18n('entities.customer.fields.shippingAddressCity'),
      {},
    ),
  },
  {
    name: 'shippingAddressState',
    label: i18n('entities.customer.fields.shippingAddressState'),
    schema: schemas.string(
      i18n('entities.customer.fields.shippingAddressState'),
      {},
    ),
  },
  {
    name: 'shippingAddressZipCode',
    label: i18n('entities.customer.fields.shippingAddressZipCode'),
    schema: schemas.string(
      i18n('entities.customer.fields.shippingAddressZipCode'),
      {},
    ),
  },
  {
    name: 'shippingAddressCountry',
    label: i18n('entities.customer.fields.shippingAddressCountry'),
    schema: schemas.string(
      i18n('entities.customer.fields.shippingAddressCountry'),
      {},
    ),
  },
];