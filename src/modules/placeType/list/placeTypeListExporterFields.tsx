import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.placeType.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.placeType.fields.name'),
  },
  {
    name: 'language',
    label: i18n('entities.placeType.fields.language'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.placeType.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.placeType.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
