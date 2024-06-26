import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.pet.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.pet.fields.name'),
  },
  {
    name: 'nickname',
    label: i18n('entities.pet.fields.nickname'),
  },
  {
    name: 'uniqueIdentifier',
    label: i18n('entities.pet.fields.uniqueIdentifier'),
  },
  {
    name: 'profileImage',
    label: i18n('entities.pet.fields.profileImage'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'birthdate',
    label: i18n('entities.pet.fields.birthdate'),
  },
  {
    name: 'age',
    label: i18n('entities.pet.fields.age'),
  },
  {
    name: 'color',
    label: i18n('entities.pet.fields.color'),
  },
  {
    name: 'secondColor',
    label: i18n('entities.pet.fields.secondColor'),
  },
  {
    name: 'thirdColor',
    label: i18n('entities.pet.fields.thirdColor'),
  },
  {
    name: 'sex',
    label: i18n('entities.pet.fields.sex'),
  },
  {
    name: 'breed',
    label: i18n('entities.pet.fields.breed'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'secondBreedMixed',
    label: i18n('entities.pet.fields.secondBreedMixed'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'type',
    label: i18n('entities.pet.fields.type'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'customerIds',
    label: i18n('entities.pet.fields.customerIds'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'petOwners',
    label: i18n('entities.pet.fields.petOwners'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'photos',
    label: i18n('entities.pet.fields.photos'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'vaccines',
    label: i18n('entities.pet.fields.vaccines'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'maturitySize',
    label: i18n('entities.pet.fields.maturitySize'),
  },
  {
    name: 'furLength',
    label: i18n('entities.pet.fields.furLength'),
  },
  {
    name: 'hasBeenVaccinated',
    label: i18n('entities.pet.fields.hasBeenVaccinated'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'hasBeenDewormed',
    label: i18n('entities.pet.fields.hasBeenDewormed'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'hasBeenSterilizedSpayed',
    label: i18n('entities.pet.fields.hasBeenSterilizedSpayed'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'health',
    label: i18n('entities.pet.fields.health'),
  },
  {
    name: 'isLost',
    label: i18n('entities.pet.fields.isLost'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'biography',
    label: i18n('entities.pet.fields.biography'),
  },
  {
    name: 'usersAuthorized',
    label: i18n('entities.pet.fields.usersAuthorized'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'businessAuthorized',
    label: i18n('entities.pet.fields.businessAuthorized'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'isLookingForMatch',
    label: i18n('entities.pet.fields.isLookingForMatch'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'diseases',
    label: i18n('entities.pet.fields.diseases'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'isGuideDog',
    label: i18n('entities.pet.fields.isGuideDog'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'numberOfLikes',
    label: i18n('entities.pet.fields.numberOfLikes'),
  },
  {
    name: 'matches',
    label: i18n('entities.pet.fields.matches'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'petFriends',
    label: i18n('entities.pet.fields.petFriends'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'governmentUniqueID',
    label: i18n('entities.pet.fields.governmentUniqueID'),
  },
  {
    name: 'bloodType',
    label: i18n('entities.pet.fields.bloodType'),
  },
  {
    name: 'hasMicrochip',
    label: i18n('entities.pet.fields.hasMicrochip'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'weight',
    label: i18n('entities.pet.fields.weight'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'weightUnit',
    label: i18n('entities.pet.fields.weightUnit'),
  },
  {
    name: 'height',
    label: i18n('entities.pet.fields.height'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'heightUnit',
    label: i18n('entities.pet.fields.heightUnit'),
  },
  {
    name: 'microchipNumber',
    label: i18n('entities.pet.fields.microchipNumber'),
  },
  {
    name: 'isDead',
    label: i18n('entities.pet.fields.isDead'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'deathDate',
    label: i18n('entities.pet.fields.deathDate'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'allowedBusinessesAccess',
    label: i18n('entities.pet.fields.allowedBusinessesAccess'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'hasPedigree',
    label: i18n('entities.pet.fields.hasPedigree'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'isAggressive',
    label: i18n('entities.pet.fields.isAggressive'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'isHyperActive',
    label: i18n('entities.pet.fields.isHyperActive'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'allowedToGrooming',
    label: i18n('entities.pet.fields.allowedToGrooming'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'phobias',
    label: i18n('entities.pet.fields.phobias'),
  },
  {
    name: 'feeding',
    label: i18n('entities.pet.fields.feeding'),
  },
  {
    name: 'isObsessive',
    label: i18n('entities.pet.fields.isObsessive'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'isAntiSocial',
    label: i18n('entities.pet.fields.isAntiSocial'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'generalNotes',
    label: i18n('entities.pet.fields.generalNotes'),
  },
  {
    name: 'problemsAndRestrinctions',
    label: i18n('entities.pet.fields.problemsAndRestrinctions'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.pet.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.pet.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
