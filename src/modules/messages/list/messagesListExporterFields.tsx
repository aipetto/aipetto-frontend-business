import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.messages.fields.id'),
  },
  {
    name: 'from',
    label: i18n('entities.messages.fields.from'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'to',
    label: i18n('entities.messages.fields.to'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'message',
    label: i18n('entities.messages.fields.message'),
  },
  {
    name: 'businessId',
    label: i18n('entities.messages.fields.businessId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'language',
    label: i18n('entities.messages.fields.language'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.messages.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.messages.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
