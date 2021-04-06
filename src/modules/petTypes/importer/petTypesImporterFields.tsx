import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.petTypes.fields.name'),
    schema: schemas.string(
      i18n('entities.petTypes.fields.name'),
      {},
    ),
  },
  {
    name: 'image',
    label: i18n('entities.petTypes.fields.image'),
    schema: schemas.images(
      i18n('entities.petTypes.fields.image'),
      {},
    ),
  },
  {
    name: 'breeds',
    label: i18n('entities.petTypes.fields.breeds'),
    schema: schemas.relationToMany(
      i18n('entities.petTypes.fields.breeds'),
      {},
    ),
  },
];