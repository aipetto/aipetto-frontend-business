import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.productCategory.fields.name'),
    schema: schemas.string(
      i18n('entities.productCategory.fields.name'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.productCategory.fields.description'),
    schema: schemas.string(
      i18n('entities.productCategory.fields.description'),
      {},
    ),
  },
  {
    name: 'language',
    label: i18n('entities.productCategory.fields.language'),
    schema: schemas.relationToOne(
      i18n('entities.productCategory.fields.language'),
      {},
    ),
  },
];