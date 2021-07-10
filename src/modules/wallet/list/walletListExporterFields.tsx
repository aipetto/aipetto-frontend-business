import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.wallet.fields.id'),
  },
  {
    name: 'totalCredits',
    label: i18n('entities.wallet.fields.totalCredits'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'aipettoPoints',
    label: i18n('entities.wallet.fields.aipettoPoints'),
  },
  {
    name: 'user',
    label: i18n('entities.wallet.fields.user'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.wallet.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.wallet.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
