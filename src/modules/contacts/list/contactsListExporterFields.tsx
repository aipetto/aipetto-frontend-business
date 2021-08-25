import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.contacts.fields.id'),
  },
  {
    name: 'firstName',
    label: i18n('entities.contacts.fields.firstName'),
  },
  {
    name: 'lastName',
    label: i18n('entities.contacts.fields.lastName'),
  },
  {
    name: 'email',
    label: i18n('entities.contacts.fields.email'),
  },
  {
    name: 'cellphone',
    label: i18n('entities.contacts.fields.cellphone'),
  },
  {
    name: 'whatsapp',
    label: i18n('entities.contacts.fields.whatsapp'),
  },
  {
    name: 'source',
    label: i18n('entities.contacts.fields.source'),
  },
  {
    name: 'country',
    label: i18n('entities.contacts.fields.country'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'city',
    label: i18n('entities.contacts.fields.city'),
  },
  {
    name: 'addressStreetName',
    label: i18n('entities.contacts.fields.addressStreetName'),
  },
  {
    name: 'addressStreetNumber',
    label: i18n('entities.contacts.fields.addressStreetNumber'),
  },
  {
    name: 'addressStreetComplement',
    label: i18n('entities.contacts.fields.addressStreetComplement'),
  },
  {
    name: 'statusContact',
    label: i18n('entities.contacts.fields.statusContact'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'contactType',
    label: i18n('entities.contacts.fields.contactType'),
  },
  {
    name: 'customerID',
    label: i18n('entities.contacts.fields.customerID'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'businessID',
    label: i18n('entities.contacts.fields.businessID'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'companyName',
    label: i18n('entities.contacts.fields.companyName'),
  },
  {
    name: 'website',
    label: i18n('entities.contacts.fields.website'),
  },
  {
    name: 'linkedinProfile',
    label: i18n('entities.contacts.fields.linkedinProfile'),
  },
  {
    name: 'instagramProfile',
    label: i18n('entities.contacts.fields.instagramProfile'),
  },
  {
    name: 'facebookProfile',
    label: i18n('entities.contacts.fields.facebookProfile'),
  },
  {
    name: 'isDeveloper',
    label: i18n('entities.contacts.fields.isDeveloper'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'isActive',
    label: i18n('entities.contacts.fields.isActive'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'contactProfilePhoto',
    label: i18n('entities.contacts.fields.contactProfilePhoto'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'language',
    label: i18n('entities.contacts.fields.language'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.contacts.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.contacts.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
