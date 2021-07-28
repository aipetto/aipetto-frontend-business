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
  {
    name: 'frequencyShotDosis',
    label: i18n('entities.vaccineTypes.fields.frequencyShotDosis'),
    schema: schemas.enumerator(
      i18n('entities.vaccineTypes.fields.frequencyShotDosis'),
      {
        "options": vaccineTypesEnumerators.frequencyShotDosis
      },
    ),
  },
  {
    name: 'petSpecificType',
    label: i18n('entities.vaccineTypes.fields.petSpecificType'),
    schema: schemas.relationToMany(
      i18n('entities.vaccineTypes.fields.petSpecificType'),
      {},
    ),
  },
  {
    name: 'vaccineCustomUniqueID',
    label: i18n('entities.vaccineTypes.fields.vaccineCustomUniqueID'),
    schema: schemas.string(
      i18n('entities.vaccineTypes.fields.vaccineCustomUniqueID'),
      {},
    ),
  },
  {
    name: 'isMandatory',
    label: i18n('entities.vaccineTypes.fields.isMandatory'),
    schema: schemas.boolean(
      i18n('entities.vaccineTypes.fields.isMandatory'),
      {},
    ),
  },
  {
    name: 'specificBreeds',
    label: i18n('entities.vaccineTypes.fields.specificBreeds'),
    schema: schemas.relationToMany(
      i18n('entities.vaccineTypes.fields.specificBreeds'),
      {},
    ),
  },
  {
    name: 'vaccinePetTargetAgeInMonths',
    label: i18n('entities.vaccineTypes.fields.vaccinePetTargetAgeInMonths'),
    schema: schemas.integer(
      i18n('entities.vaccineTypes.fields.vaccinePetTargetAgeInMonths'),
      {},
    ),
  },
];