import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.answers.fields.id'),
  },
  {
    name: 'answer',
    label: i18n('entities.answers.fields.answer'),
  },
  {
    name: 'userID',
    label: i18n('entities.answers.fields.userID'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'type',
    label: i18n('entities.answers.fields.type'),
  },
  {
    name: 'isActive',
    label: i18n('entities.answers.fields.isActive'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'questionID',
    label: i18n('entities.answers.fields.questionID'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'language',
    label: i18n('entities.answers.fields.language'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.answers.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.answers.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
