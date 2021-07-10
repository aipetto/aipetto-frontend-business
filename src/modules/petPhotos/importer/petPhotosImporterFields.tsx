import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'description',
    label: i18n('entities.petPhotos.fields.description'),
    schema: schemas.string(
      i18n('entities.petPhotos.fields.description'),
      {},
    ),
  },
  {
    name: 'petId',
    label: i18n('entities.petPhotos.fields.petId'),
    schema: schemas.relationToOne(
      i18n('entities.petPhotos.fields.petId'),
      {},
    ),
  },
  {
    name: 'photo',
    label: i18n('entities.petPhotos.fields.photo'),
    schema: schemas.images(
      i18n('entities.petPhotos.fields.photo'),
      {},
    ),
  },
  {
    name: 'latitude',
    label: i18n('entities.petPhotos.fields.latitude'),
    schema: schemas.string(
      i18n('entities.petPhotos.fields.latitude'),
      {},
    ),
  },
  {
    name: 'longitude',
    label: i18n('entities.petPhotos.fields.longitude'),
    schema: schemas.string(
      i18n('entities.petPhotos.fields.longitude'),
      {},
    ),
  },
];