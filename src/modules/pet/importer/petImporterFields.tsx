import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import petEnumerators from 'src/modules/pet/petEnumerators';
import moment from 'moment';

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
    name: 'profileImage',
    label: i18n('entities.pet.fields.profileImage'),
    schema: schemas.images(
      i18n('entities.pet.fields.profileImage'),
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
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
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
    name: 'secondColor',
    label: i18n('entities.pet.fields.secondColor'),
    schema: schemas.enumerator(
      i18n('entities.pet.fields.secondColor'),
      {
        "options": petEnumerators.secondColor
      },
    ),
  },
  {
    name: 'thirdColor',
    label: i18n('entities.pet.fields.thirdColor'),
    schema: schemas.enumerator(
      i18n('entities.pet.fields.thirdColor'),
      {
        "options": petEnumerators.thirdColor
      },
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
    name: 'secondBreedMixed',
    label: i18n('entities.pet.fields.secondBreedMixed'),
    schema: schemas.relationToOne(
      i18n('entities.pet.fields.secondBreedMixed'),
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
  {
    name: 'customerId',
    label: i18n('entities.pet.fields.customerId'),
    schema: schemas.relationToOne(
      i18n('entities.pet.fields.customerId'),
      {},
    ),
  },
  {
    name: 'petOwners',
    label: i18n('entities.pet.fields.petOwners'),
    schema: schemas.relationToMany(
      i18n('entities.pet.fields.petOwners'),
      {},
    ),
  },
  {
    name: 'photos',
    label: i18n('entities.pet.fields.photos'),
    schema: schemas.relationToMany(
      i18n('entities.pet.fields.photos'),
      {},
    ),
  },
  {
    name: 'vaccines',
    label: i18n('entities.pet.fields.vaccines'),
    schema: schemas.relationToMany(
      i18n('entities.pet.fields.vaccines'),
      {},
    ),
  },
  {
    name: 'maturitySize',
    label: i18n('entities.pet.fields.maturitySize'),
    schema: schemas.enumerator(
      i18n('entities.pet.fields.maturitySize'),
      {
        "options": petEnumerators.maturitySize
      },
    ),
  },
  {
    name: 'furLength',
    label: i18n('entities.pet.fields.furLength'),
    schema: schemas.enumerator(
      i18n('entities.pet.fields.furLength'),
      {
        "options": petEnumerators.furLength
      },
    ),
  },
  {
    name: 'hasBeenVaccinated',
    label: i18n('entities.pet.fields.hasBeenVaccinated'),
    schema: schemas.boolean(
      i18n('entities.pet.fields.hasBeenVaccinated'),
      {},
    ),
  },
  {
    name: 'hasBeenDewormed',
    label: i18n('entities.pet.fields.hasBeenDewormed'),
    schema: schemas.boolean(
      i18n('entities.pet.fields.hasBeenDewormed'),
      {},
    ),
  },
  {
    name: 'hasBeenSterilizedSpayed',
    label: i18n('entities.pet.fields.hasBeenSterilizedSpayed'),
    schema: schemas.boolean(
      i18n('entities.pet.fields.hasBeenSterilizedSpayed'),
      {},
    ),
  },
  {
    name: 'health',
    label: i18n('entities.pet.fields.health'),
    schema: schemas.enumerator(
      i18n('entities.pet.fields.health'),
      {
        "options": petEnumerators.health
      },
    ),
  },
  {
    name: 'isLost',
    label: i18n('entities.pet.fields.isLost'),
    schema: schemas.boolean(
      i18n('entities.pet.fields.isLost'),
      {},
    ),
  },
  {
    name: 'biography',
    label: i18n('entities.pet.fields.biography'),
    schema: schemas.string(
      i18n('entities.pet.fields.biography'),
      {},
    ),
  },
  {
    name: 'usersAuthorized',
    label: i18n('entities.pet.fields.usersAuthorized'),
    schema: schemas.relationToMany(
      i18n('entities.pet.fields.usersAuthorized'),
      {},
    ),
  },
  {
    name: 'businessAuthorized',
    label: i18n('entities.pet.fields.businessAuthorized'),
    schema: schemas.relationToMany(
      i18n('entities.pet.fields.businessAuthorized'),
      {},
    ),
  },
  {
    name: 'isLookingForMatch',
    label: i18n('entities.pet.fields.isLookingForMatch'),
    schema: schemas.boolean(
      i18n('entities.pet.fields.isLookingForMatch'),
      {},
    ),
  },
  {
    name: 'diseases',
    label: i18n('entities.pet.fields.diseases'),
    schema: schemas.relationToMany(
      i18n('entities.pet.fields.diseases'),
      {},
    ),
  },
  {
    name: 'isGuideDog',
    label: i18n('entities.pet.fields.isGuideDog'),
    schema: schemas.boolean(
      i18n('entities.pet.fields.isGuideDog'),
      {},
    ),
  },
  {
    name: 'numberOfLikes',
    label: i18n('entities.pet.fields.numberOfLikes'),
    schema: schemas.integer(
      i18n('entities.pet.fields.numberOfLikes'),
      {},
    ),
  },
  {
    name: 'matches',
    label: i18n('entities.pet.fields.matches'),
    schema: schemas.relationToMany(
      i18n('entities.pet.fields.matches'),
      {},
    ),
  },
  {
    name: 'petFriends',
    label: i18n('entities.pet.fields.petFriends'),
    schema: schemas.relationToMany(
      i18n('entities.pet.fields.petFriends'),
      {},
    ),
  },
  {
    name: 'governmentUniqueID',
    label: i18n('entities.pet.fields.governmentUniqueID'),
    schema: schemas.string(
      i18n('entities.pet.fields.governmentUniqueID'),
      {},
    ),
  },
  {
    name: 'bloodType',
    label: i18n('entities.pet.fields.bloodType'),
    schema: schemas.enumerator(
      i18n('entities.pet.fields.bloodType'),
      {
        "options": petEnumerators.bloodType
      },
    ),
  },
  {
    name: 'hasMicrochip',
    label: i18n('entities.pet.fields.hasMicrochip'),
    schema: schemas.boolean(
      i18n('entities.pet.fields.hasMicrochip'),
      {},
    ),
  },
  {
    name: 'weight',
    label: i18n('entities.pet.fields.weight'),
    schema: schemas.decimal(
      i18n('entities.pet.fields.weight'),
      {},
    ),
  },
  {
    name: 'weightUnit',
    label: i18n('entities.pet.fields.weightUnit'),
    schema: schemas.enumerator(
      i18n('entities.pet.fields.weightUnit'),
      {
        "options": petEnumerators.weightUnit
      },
    ),
  },
  {
    name: 'height',
    label: i18n('entities.pet.fields.height'),
    schema: schemas.decimal(
      i18n('entities.pet.fields.height'),
      {},
    ),
  },
  {
    name: 'heightUnit',
    label: i18n('entities.pet.fields.heightUnit'),
    schema: schemas.enumerator(
      i18n('entities.pet.fields.heightUnit'),
      {
        "options": petEnumerators.heightUnit
      },
    ),
  },
];