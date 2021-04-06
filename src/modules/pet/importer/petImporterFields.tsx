import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import petEnumerators from 'src/modules/pet/petEnumerators';

export default [
  {
    name: 'name',
    label: i18n('entities.pet.fields.name'),
    schema: schemas.string(
      i18n('entities.pet.fields.name'),
      {},
    ),
  },
  {
    name: 'nickname',
    label: i18n('entities.pet.fields.nickname'),
    schema: schemas.string(
      i18n('entities.pet.fields.nickname'),
      {},
    ),
  },
  {
    name: 'birthdate',
    label: i18n('entities.pet.fields.birthdate'),
    schema: schemas.date(
      i18n('entities.pet.fields.birthdate'),
      {},
    ),
  },
  {
    name: 'age',
    label: i18n('entities.pet.fields.age'),
    schema: schemas.integer(
      i18n('entities.pet.fields.age'),
      {},
    ),
  },
  {
    name: 'color',
    label: i18n('entities.pet.fields.color'),
    schema: schemas.enumerator(
      i18n('entities.pet.fields.color'),
      {
        "options": petEnumerators.color
      },
    ),
  },
  {
    name: 'profileImage',
    label: i18n('entities.pet.fields.profileImage'),
    schema: schemas.images(
      i18n('entities.pet.fields.profileImage'),
      {},
    ),
  },
  {
    name: 'sex',
    label: i18n('entities.pet.fields.sex'),
    schema: schemas.enumerator(
      i18n('entities.pet.fields.sex'),
      {
        "options": petEnumerators.sex
      },
    ),
  },
  {
    name: 'breed',
    label: i18n('entities.pet.fields.breed'),
    schema: schemas.relationToOne(
      i18n('entities.pet.fields.breed'),
      {},
    ),
  },
  {
    name: 'type',
    label: i18n('entities.pet.fields.type'),
    schema: schemas.relationToOne(
      i18n('entities.pet.fields.type'),
      {},
    ),
  },
];