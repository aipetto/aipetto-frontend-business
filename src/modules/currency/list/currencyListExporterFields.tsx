import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.currency.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.currency.fields.name'),
  },
  {
    name: 'symbol',
    label: i18n('entities.currency.fields.symbol'),
  },
  {
    name: 'active',
    label: i18n('entities.currency.fields.active'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.currency.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.currency.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
