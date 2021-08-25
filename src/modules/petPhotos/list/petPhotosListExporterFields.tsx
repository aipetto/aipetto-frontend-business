import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.petPhotos.fields.id'),
  },
  {
    name: 'description',
    label: i18n('entities.petPhotos.fields.description'),
  },
  {
    name: 'petId',
    label: i18n('entities.petPhotos.fields.petId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'photo',
    label: i18n('entities.petPhotos.fields.photo'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.petPhotos.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.petPhotos.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
