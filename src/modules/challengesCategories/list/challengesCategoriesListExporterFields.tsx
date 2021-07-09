import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.challengesCategories.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.challengesCategories.fields.name'),
  },
  {
    name: 'language',
    label: i18n('entities.challengesCategories.fields.language'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.challengesCategories.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.challengesCategories.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
