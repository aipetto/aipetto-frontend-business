import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.businessServicesTypes.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.businessServicesTypes.fields.name'),
  },
  {
    name: 'category',
    label: i18n('entities.businessServicesTypes.fields.category'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'language',
    label: i18n('entities.businessServicesTypes.fields.language'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'serviceImage',
    label: i18n('entities.businessServicesTypes.fields.serviceImage'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.businessServicesTypes.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.businessServicesTypes.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
