import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.customer.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.customer.fields.name'),
  },
  {
    name: 'businessId',
    label: i18n('entities.customer.fields.businessId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'uniqueCustomIdentifier',
    label: i18n('entities.customer.fields.uniqueCustomIdentifier'),
  },
  {
    name: 'userId',
    label: i18n('entities.customer.fields.userId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'source',
    label: i18n('entities.customer.fields.source'),
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
    name: 'smsPhoneNumber',
    label: i18n('entities.customer.fields.smsPhoneNumber'),
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
    name: 'email',
    label: i18n('entities.customer.fields.email'),
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
    render: exporterRenders.relationToOne(),
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
    name: 'latitude',
    label: i18n('entities.customer.fields.latitude'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'longitude',
    label: i18n('entities.customer.fields.longitude'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'prospectStatus',
    label: i18n('entities.customer.fields.prospectStatus'),
  },
  {
    name: 'customerStatus',
    label: i18n('entities.customer.fields.customerStatus'),
  },
  {
    name: 'wantToReceiveNotifications',
    label: i18n('entities.customer.fields.wantToReceiveNotifications'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'currency',
    label: i18n('entities.customer.fields.currency'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'balance',
    label: i18n('entities.customer.fields.balance'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'shippingAddressStreetNumber',
    label: i18n('entities.customer.fields.shippingAddressStreetNumber'),
  },
  {
    name: 'addressStreetNumber',
    label: i18n('entities.customer.fields.addressStreetNumber'),
  },
  {
    name: 'billingAddressStreetNumber',
    label: i18n('entities.customer.fields.billingAddressStreetNumber'),
  },
  {
    name: 'addressStreetComplement',
    label: i18n('entities.customer.fields.addressStreetComplement'),
  },
  {
    name: 'billingAddressStreetComplement',
    label: i18n('entities.customer.fields.billingAddressStreetComplement'),
  },
  {
    name: 'shippingAddressStreetComplement',
    label: i18n('entities.customer.fields.shippingAddressStreetComplement'),
  },
  {
    name: 'customerProfileImage',
    label: i18n('entities.customer.fields.customerProfileImage'),
    render: exporterRenders.filesOrImages(),
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
