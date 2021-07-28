import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.questions.fields.id'),
  },
  {
    name: 'question',
    label: i18n('entities.questions.fields.question'),
  },
  {
    name: 'type',
    label: i18n('entities.questions.fields.type'),
  },
  {
    name: 'userID',
    label: i18n('entities.questions.fields.userID'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'isActive',
    label: i18n('entities.questions.fields.isActive'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'language',
    label: i18n('entities.questions.fields.language'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'country',
    label: i18n('entities.questions.fields.country'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.questions.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.questions.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
