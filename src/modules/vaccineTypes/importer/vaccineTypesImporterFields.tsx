import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import vaccineTypesEnumerators from 'src/modules/vaccineTypes/vaccineTypesEnumerators';

export default [
  {
    name: 'name',
    label: i18n('entities.vaccineTypes.fields.name'),
    schema: schemas.string(
      i18n('entities.vaccineTypes.fields.name'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'country',
    label: i18n('entities.vaccineTypes.fields.country'),
    schema: schemas.relationToOne(
      i18n('entities.vaccineTypes.fields.country'),
      {},
    ),
  },
  {
    name: 'language',
    label: i18n('entities.vaccineTypes.fields.language'),
    schema: schemas.enumerator(
      i18n('entities.vaccineTypes.fields.language'),
      {
        "options": vaccineTypesEnumerators.language
      },
    ),
  },
];