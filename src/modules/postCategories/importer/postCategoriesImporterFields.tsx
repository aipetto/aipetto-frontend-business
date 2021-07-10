import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.postCategories.fields.name'),
    schema: schemas.string(
      i18n('entities.postCategories.fields.name'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.postCategories.fields.description'),
    schema: schemas.string(
      i18n('entities.postCategories.fields.description'),
      {},
    ),
  },
  {
    name: 'categoryUrl',
    label: i18n('entities.postCategories.fields.categoryUrl'),
    schema: schemas.string(
      i18n('entities.postCategories.fields.categoryUrl'),
      {},
    ),
  },
  {
    name: 'language',
    label: i18n('entities.postCategories.fields.language'),
    schema: schemas.relationToOne(
      i18n('entities.postCategories.fields.language'),
      {},
    ),
  },
];