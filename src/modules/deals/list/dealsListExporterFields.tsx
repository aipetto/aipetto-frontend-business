import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.deals.fields.id'),
  },
  {
    name: 'status',
    label: i18n('entities.deals.fields.status'),
  },
  {
    name: 'customer',
    label: i18n('entities.deals.fields.customer'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'digitalContracts',
    label: i18n('entities.deals.fields.digitalContracts'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'dateStart',
    label: i18n('entities.deals.fields.dateStart'),
  },
  {
    name: 'dateEnded',
    label: i18n('entities.deals.fields.dateEnded'),
  },
  {
    name: 'salesManagerResponsible',
    label: i18n('entities.deals.fields.salesManagerResponsible'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'businessID',
    label: i18n('entities.deals.fields.businessID'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'country',
    label: i18n('entities.deals.fields.country'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.deals.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.deals.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
