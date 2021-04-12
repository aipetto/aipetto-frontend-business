import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import breedEnumerators from 'src/modules/breed/breedEnumerators';

export default [
  {
    name: 'name',
    label: i18n('entities.breed.fields.name'),
    schema: schemas.string(
      i18n('entities.breed.fields.name'),
      {},
    ),
  },
  {
    name: 'type',
    label: i18n('entities.breed.fields.type'),
    schema: schemas.relationToOne(
      i18n('entities.breed.fields.type'),
      {},
    ),
  },
  {
    name: 'size',
    label: i18n('entities.breed.fields.size'),
    schema: schemas.enumerator(
      i18n('entities.breed.fields.size'),
      {
        "options": breedEnumerators.size
      },
    ),
  },
  {
    name: 'exercise',
    label: i18n('entities.breed.fields.exercise'),
    schema: schemas.enumerator(
      i18n('entities.breed.fields.exercise'),
      {
        "options": breedEnumerators.exercise
      },
    ),
  },
  {
    name: 'sizeOfHome',
    label: i18n('entities.breed.fields.sizeOfHome'),
    schema: schemas.enumerator(
      i18n('entities.breed.fields.sizeOfHome'),
      {
        "options": breedEnumerators.sizeOfHome
      },
    ),
  },
  {
    name: 'grooming',
    label: i18n('entities.breed.fields.grooming'),
    schema: schemas.enumerator(
      i18n('entities.breed.fields.grooming'),
      {
        "options": breedEnumerators.grooming
      },
    ),
  },
  {
    name: 'coatLength',
    label: i18n('entities.breed.fields.coatLength'),
    schema: schemas.enumerator(
      i18n('entities.breed.fields.coatLength'),
      {
        "options": breedEnumerators.coatLength
      },
    ),
  },
  {
    name: 'sheds',
    label: i18n('entities.breed.fields.sheds'),
    schema: schemas.enumerator(
      i18n('entities.breed.fields.sheds'),
      {
        "options": breedEnumerators.sheds
      },
    ),
  },
  {
    name: 'lifespan',
    label: i18n('entities.breed.fields.lifespan'),
    schema: schemas.enumerator(
      i18n('entities.breed.fields.lifespan'),
      {
        "options": breedEnumerators.lifespan
      },
    ),
  },
  {
    name: 'vulnerableNativeBreed',
    label: i18n('entities.breed.fields.vulnerableNativeBreed'),
    schema: schemas.enumerator(
      i18n('entities.breed.fields.vulnerableNativeBreed'),
      {
        "options": breedEnumerators.vulnerableNativeBreed
      },
    ),
  },
  {
    name: 'townOrCountry',
    label: i18n('entities.breed.fields.townOrCountry'),
    schema: schemas.enumerator(
      i18n('entities.breed.fields.townOrCountry'),
      {
        "options": breedEnumerators.townOrCountry
      },
    ),
  },
  {
    name: 'sizeOfGarden',
    label: i18n('entities.breed.fields.sizeOfGarden'),
    schema: schemas.enumerator(
      i18n('entities.breed.fields.sizeOfGarden'),
      {
        "options": breedEnumerators.sizeOfGarden
      },
    ),
  },
  {
    name: 'image',
    label: i18n('entities.breed.fields.image'),
    schema: schemas.images(
      i18n('entities.breed.fields.image'),
      {},
    ),
  },
];