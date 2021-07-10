import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.challengesCategories.fields.name'),
    schema: schemas.string(
      i18n('entities.challengesCategories.fields.name'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'language',
    label: i18n('entities.challengesCategories.fields.language'),
    schema: schemas.relationToOne(
      i18n('entities.challengesCategories.fields.language'),
      {},
    ),
  },
];