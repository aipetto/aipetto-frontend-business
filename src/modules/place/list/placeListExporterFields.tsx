import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.place.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.place.fields.name'),
  },
  {
    name: 'placeType',
    label: i18n('entities.place.fields.placeType'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'businessId',
    label: i18n('entities.place.fields.businessId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'services',
    label: i18n('entities.place.fields.services'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'categories',
    label: i18n('entities.place.fields.categories'),
    render: exporterRenders.relationToMany(),
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
    name: 'addressCity',
    label: i18n('entities.place.fields.addressCity'),
  },
  {
    name: 'addressState',
    label: i18n('entities.place.fields.addressState'),
  },
  {
    name: 'addressCountry',
    label: i18n('entities.place.fields.addressCountry'),
    render: exporterRenders.relationToOne(),
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
    name: 'stars',
    label: i18n('entities.place.fields.stars'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'isOpen',
    label: i18n('entities.place.fields.isOpen'),
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
