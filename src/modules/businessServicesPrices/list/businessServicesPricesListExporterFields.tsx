import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.businessServicesPrices.fields.id'),
  },
  {
    name: 'service',
    label: i18n('entities.businessServicesPrices.fields.service'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'businessId',
    label: i18n('entities.businessServicesPrices.fields.businessId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'servicePrice',
    label: i18n('entities.businessServicesPrices.fields.servicePrice'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.businessServicesPrices.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.businessServicesPrices.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
