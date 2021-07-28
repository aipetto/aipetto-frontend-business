import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.business.fields.id'),
  },
  {
    name: 'businessID',
    label: i18n('entities.business.fields.businessID'),
  },
  {
    name: 'name',
    label: i18n('entities.business.fields.name'),
  },
  {
    name: 'services',
    label: i18n('entities.business.fields.services'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'categories',
    label: i18n('entities.business.fields.categories'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'contactName',
    label: i18n('entities.business.fields.contactName'),
  },
  {
    name: 'contactPhone',
    label: i18n('entities.business.fields.contactPhone'),
  },
  {
    name: 'contactWhatsApp',
    label: i18n('entities.business.fields.contactWhatsApp'),
  },
  {
    name: 'contactEmail',
    label: i18n('entities.business.fields.contactEmail'),
  },
  {
    name: 'addressStreet',
    label: i18n('entities.business.fields.addressStreet'),
  },
  {
    name: 'addressStreetNumber',
    label: i18n('entities.business.fields.addressStreetNumber'),
  },
  {
    name: 'addressPostCode',
    label: i18n('entities.business.fields.addressPostCode'),
  },
  {
    name: 'city',
    label: i18n('entities.business.fields.city'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'state',
    label: i18n('entities.business.fields.state'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'country',
    label: i18n('entities.business.fields.country'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'businessLogo',
    label: i18n('entities.business.fields.businessLogo'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'latitude',
    label: i18n('entities.business.fields.latitude'),
  },
  {
    name: 'longitude',
    label: i18n('entities.business.fields.longitude'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.business.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.business.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
