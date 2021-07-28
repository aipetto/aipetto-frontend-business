import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.languages.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.languages.fields.name'),
  },
  {
    name: 'active',
    label: i18n('entities.languages.fields.active'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'languageCode',
    label: i18n('entities.languages.fields.languageCode'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.languages.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.languages.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
