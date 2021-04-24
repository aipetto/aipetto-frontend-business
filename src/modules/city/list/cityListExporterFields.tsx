import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.city.fields.id'),
  },
  {
    name: 'country',
    label: i18n('entities.city.fields.country'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'name',
    label: i18n('entities.city.fields.name'),
  },
  {
    name: 'latitude',
    label: i18n('entities.city.fields.latitude'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'longitude',
    label: i18n('entities.city.fields.longitude'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.city.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.city.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
