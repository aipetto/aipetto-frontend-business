import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.newBusinessSurvey.fields.id'),
  },
  {
    name: 'nameBusiness',
    label: i18n('entities.newBusinessSurvey.fields.nameBusiness'),
  },
  {
    name: 'numberOfPlaces',
    label: i18n('entities.newBusinessSurvey.fields.numberOfPlaces'),
  },
  {
    name: 'contactName',
    label: i18n('entities.newBusinessSurvey.fields.contactName'),
  },
  {
    name: 'contactEmail',
    label: i18n('entities.newBusinessSurvey.fields.contactEmail'),
  },
  {
    name: 'contactPhone',
    label: i18n('entities.newBusinessSurvey.fields.contactPhone'),
  },
  {
    name: 'cellphoneForSMS',
    label: i18n('entities.newBusinessSurvey.fields.cellphoneForSMS'),
  },
  {
    name: 'digitalNetworks',
    label: i18n('entities.newBusinessSurvey.fields.digitalNetworks'),
  },
  {
    name: 'allowReceiveNotifications',
    label: i18n('entities.newBusinessSurvey.fields.allowReceiveNotifications'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'services',
    label: i18n('entities.newBusinessSurvey.fields.services'),
    render: exporterRenders.stringArray(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.newBusinessSurvey.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.newBusinessSurvey.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
