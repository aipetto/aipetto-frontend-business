import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.petTypes.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.petTypes.fields.name'),
  },
  {
    name: 'image',
    label: i18n('entities.petTypes.fields.image'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'language',
    label: i18n('entities.petTypes.fields.language'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.petTypes.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.petTypes.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
