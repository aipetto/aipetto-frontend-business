import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.landingSurvey.fields.name'),
    schema: schemas.string(
      i18n('entities.landingSurvey.fields.name'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'email',
    label: i18n('entities.landingSurvey.fields.email'),
    schema: schemas.string(
      i18n('entities.landingSurvey.fields.email'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'numberOfPets',
    label: i18n('entities.landingSurvey.fields.numberOfPets'),
    schema: schemas.string(
      i18n('entities.landingSurvey.fields.numberOfPets'),
      {},
    ),
  },
  {
    name: 'interests',
    label: i18n('entities.landingSurvey.fields.interests'),
    schema: schemas.stringArray(
      i18n('entities.landingSurvey.fields.interests'),
      {},
    ),
  },
  {
    name: 'extraInfo',
    label: i18n('entities.landingSurvey.fields.extraInfo'),
    schema: schemas.string(
      i18n('entities.landingSurvey.fields.extraInfo'),
      {},
    ),
  },
  {
    name: 'allowReceiveNotifications',
    label: i18n('entities.landingSurvey.fields.allowReceiveNotifications'),
    schema: schemas.boolean(
      i18n('entities.landingSurvey.fields.allowReceiveNotifications'),
      {},
    ),
  },
];