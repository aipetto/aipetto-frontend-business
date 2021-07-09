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
    name: 'placeTypeImage',
    label: i18n('entities.placeType.fields.placeTypeImage'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'isPublicPlace',
    label: i18n('entities.placeType.fields.isPublicPlace'),
    render: exporterRenders.boolean(),
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
