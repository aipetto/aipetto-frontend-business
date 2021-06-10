import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'nameBusiness',
    label: i18n('entities.newBusinessSurvey.fields.nameBusiness'),
    schema: schemas.string(
      i18n('entities.newBusinessSurvey.fields.nameBusiness'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'numberOfPlaces',
    label: i18n('entities.newBusinessSurvey.fields.numberOfPlaces'),
    schema: schemas.string(
      i18n('entities.newBusinessSurvey.fields.numberOfPlaces'),
      {},
    ),
  },
  {
    name: 'contactName',
    label: i18n('entities.newBusinessSurvey.fields.contactName'),
    schema: schemas.string(
      i18n('entities.newBusinessSurvey.fields.contactName'),
      {},
    ),
  },
  {
    name: 'contactEmail',
    label: i18n('entities.newBusinessSurvey.fields.contactEmail'),
    schema: schemas.string(
      i18n('entities.newBusinessSurvey.fields.contactEmail'),
      {},
    ),
  },
  {
    name: 'contactPhone',
    label: i18n('entities.newBusinessSurvey.fields.contactPhone'),
    schema: schemas.string(
      i18n('entities.newBusinessSurvey.fields.contactPhone'),
      {},
    ),
  },
  {
    name: 'cellphoneForSMS',
    label: i18n('entities.newBusinessSurvey.fields.cellphoneForSMS'),
    schema: schemas.string(
      i18n('entities.newBusinessSurvey.fields.cellphoneForSMS'),
      {},
    ),
  },
  {
    name: 'digitalNetworks',
    label: i18n('entities.newBusinessSurvey.fields.digitalNetworks'),
    schema: schemas.string(
      i18n('entities.newBusinessSurvey.fields.digitalNetworks'),
      {},
    ),
  },
  {
    name: 'allowReceiveNotifications',
    label: i18n('entities.newBusinessSurvey.fields.allowReceiveNotifications'),
    schema: schemas.boolean(
      i18n('entities.newBusinessSurvey.fields.allowReceiveNotifications'),
      {},
    ),
  },
  {
    name: 'services',
    label: i18n('entities.newBusinessSurvey.fields.services'),
    schema: schemas.stringArray(
      i18n('entities.newBusinessSurvey.fields.services'),
      {},
    ),
  },
];