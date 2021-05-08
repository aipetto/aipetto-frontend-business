import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.vaccineTypes.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.vaccineTypes.fields.name'),
  },
  {
    name: 'country',
    label: i18n('entities.vaccineTypes.fields.country'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.vaccineTypes.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.vaccineTypes.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
