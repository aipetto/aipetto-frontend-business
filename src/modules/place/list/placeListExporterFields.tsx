import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.place.fields.id'),
  },
  {
    name: 'businessId',
    label: i18n('entities.place.fields.businessId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'latitude',
    label: i18n('entities.place.fields.latitude'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'longitude',
    label: i18n('entities.place.fields.longitude'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'address',
    label: i18n('entities.place.fields.address'),
  },
  {
    name: 'addressNumber',
    label: i18n('entities.place.fields.addressNumber'),
  },
  {
    name: 'addressZipCode',
    label: i18n('entities.place.fields.addressZipCode'),
  },
  {
    name: 'openTime',
    label: i18n('entities.place.fields.openTime'),
  },
  {
    name: 'closeTime',
    label: i18n('entities.place.fields.closeTime'),
  },
  {
    name: 'is24hours',
    label: i18n('entities.place.fields.is24hours'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.place.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.place.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
