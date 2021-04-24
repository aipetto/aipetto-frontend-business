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
    name: 'profileImage',
    label: i18n('entities.pet.fields.profileImage'),
    render: exporterRenders.filesOrImages(),
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
    name: 'type',
    label: i18n('entities.pet.fields.type'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'customerId',
    label: i18n('entities.pet.fields.customerId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'petOwners',
    label: i18n('entities.pet.fields.petOwners'),
    render: exporterRenders.relationToMany(),
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
