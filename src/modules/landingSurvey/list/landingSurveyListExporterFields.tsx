import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.landingSurvey.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.landingSurvey.fields.name'),
  },
  {
    name: 'email',
    label: i18n('entities.landingSurvey.fields.email'),
  },
  {
    name: 'numberOfPets',
    label: i18n('entities.landingSurvey.fields.numberOfPets'),
  },
  {
    name: 'interests',
    label: i18n('entities.landingSurvey.fields.interests'),
    render: exporterRenders.stringArray(),
  },
  {
    name: 'extraInfo',
    label: i18n('entities.landingSurvey.fields.extraInfo'),
  },
  {
    name: 'allowReceiveNotifications',
    label: i18n('entities.landingSurvey.fields.allowReceiveNotifications'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'latitude',
    label: i18n('entities.landingSurvey.fields.latitude'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'longitude',
    label: i18n('entities.landingSurvey.fields.longitude'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'petProfession',
    label: i18n('entities.landingSurvey.fields.petProfession'),
    render: exporterRenders.stringArray(),
  },
  {
    name: 'address',
    label: i18n('entities.landingSurvey.fields.address'),
  },
  {
    name: 'country',
    label: i18n('entities.landingSurvey.fields.country'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.landingSurvey.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.landingSurvey.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
