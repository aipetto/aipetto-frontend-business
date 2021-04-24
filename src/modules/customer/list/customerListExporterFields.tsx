import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.customer.fields.id'),
  },
  {
    name: 'businessId',
    label: i18n('entities.customer.fields.businessId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'source',
    label: i18n('entities.customer.fields.source'),
  },
  {
    name: 'userId',
    label: i18n('entities.customer.fields.userId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'name',
    label: i18n('entities.customer.fields.name'),
  },
  {
    name: 'surname',
    label: i18n('entities.customer.fields.surname'),
  },
  {
    name: 'birthdate',
    label: i18n('entities.customer.fields.birthdate'),
  },
  {
    name: 'gender',
    label: i18n('entities.customer.fields.gender'),
  },
  {
    name: 'whatsApp',
    label: i18n('entities.customer.fields.whatsApp'),
  },
  {
    name: 'phoneNumber',
    label: i18n('entities.customer.fields.phoneNumber'),
  },
  {
    name: 'address',
    label: i18n('entities.customer.fields.address'),
  },
  {
    name: 'zipCode',
    label: i18n('entities.customer.fields.zipCode'),
  },
  {
    name: 'city',
    label: i18n('entities.customer.fields.city'),
  },
  {
    name: 'state',
    label: i18n('entities.customer.fields.state'),
  },
  {
    name: 'country',
    label: i18n('entities.customer.fields.country'),
  },
  {
    name: 'billingAddressStreet',
    label: i18n('entities.customer.fields.billingAddressStreet'),
  },
  {
    name: 'billingAddressCity',
    label: i18n('entities.customer.fields.billingAddressCity'),
  },
  {
    name: 'billingAddressState',
    label: i18n('entities.customer.fields.billingAddressState'),
  },
  {
    name: 'billingAddressZipCode',
    label: i18n('entities.customer.fields.billingAddressZipCode'),
  },
  {
    name: 'billingAddressCountry',
    label: i18n('entities.customer.fields.billingAddressCountry'),
  },
  {
    name: 'shippingAddressStreet',
    label: i18n('entities.customer.fields.shippingAddressStreet'),
  },
  {
    name: 'shippingAddressCity',
    label: i18n('entities.customer.fields.shippingAddressCity'),
  },
  {
    name: 'shippingAddressState',
    label: i18n('entities.customer.fields.shippingAddressState'),
  },
  {
    name: 'shippingAddressZipCode',
    label: i18n('entities.customer.fields.shippingAddressZipCode'),
  },
  {
    name: 'shippingAddressCountry',
    label: i18n('entities.customer.fields.shippingAddressCountry'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.customer.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.customer.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
