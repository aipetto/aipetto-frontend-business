import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.providers.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.providers.fields.name'),
  },
  {
    name: 'businessID',
    label: i18n('entities.providers.fields.businessID'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'providerID',
    label: i18n('entities.providers.fields.providerID'),
  },
  {
    name: 'category',
    label: i18n('entities.providers.fields.category'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'serviceTypes',
    label: i18n('entities.providers.fields.serviceTypes'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'contactName',
    label: i18n('entities.providers.fields.contactName'),
  },
  {
    name: 'contactPhone',
    label: i18n('entities.providers.fields.contactPhone'),
  },
  {
    name: 'contactWhatsApp',
    label: i18n('entities.providers.fields.contactWhatsApp'),
  },
  {
    name: 'addressStreet',
    label: i18n('entities.providers.fields.addressStreet'),
  },
  {
    name: 'addressStreetNumber',
    label: i18n('entities.providers.fields.addressStreetNumber'),
  },
  {
    name: 'addressPostCode',
    label: i18n('entities.providers.fields.addressPostCode'),
  },
  {
    name: 'city',
    label: i18n('entities.providers.fields.city'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'state',
    label: i18n('entities.providers.fields.state'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'country',
    label: i18n('entities.providers.fields.country'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.providers.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.providers.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
