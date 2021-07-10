import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.businessCategory.fields.name'),
    schema: schemas.string(
      i18n('entities.businessCategory.fields.name'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'language',
    label: i18n('entities.businessCategory.fields.language'),
    schema: schemas.relationToOne(
      i18n('entities.businessCategory.fields.language'),
      {},
    ),
  },
  {
    name: 'categoryImage',
    label: i18n('entities.businessCategory.fields.categoryImage'),
    schema: schemas.images(
      i18n('entities.businessCategory.fields.categoryImage'),
      {},
    ),
  },
  {
    name: 'pageUrl',
    label: i18n('entities.businessCategory.fields.pageUrl'),
    schema: schemas.string(
      i18n('entities.businessCategory.fields.pageUrl'),
      {},
    ),
  },
];