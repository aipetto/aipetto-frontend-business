import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.place.fields.name'),
    schema: schemas.string(
      i18n('entities.place.fields.name'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'placeType',
    label: i18n('entities.place.fields.placeType'),
    schema: schemas.relationToOne(
      i18n('entities.place.fields.placeType'),
      {},
    ),
  },
  {
    name: 'businessId',
    label: i18n('entities.place.fields.businessId'),
    schema: schemas.relationToOne(
      i18n('entities.place.fields.businessId'),
      {},
    ),
  },
  {
    name: 'services',
    label: i18n('entities.place.fields.services'),
    schema: schemas.relationToMany(
      i18n('entities.place.fields.services'),
      {},
    ),
  },
  {
    name: 'categories',
    label: i18n('entities.place.fields.categories'),
    schema: schemas.relationToMany(
      i18n('entities.place.fields.categories'),
      {},
    ),
  },
  {
    name: 'latitude',
    label: i18n('entities.place.fields.latitude'),
    schema: schemas.decimal(
      i18n('entities.place.fields.latitude'),
      {},
    ),
  },
  {
    name: 'longitude',
    label: i18n('entities.place.fields.longitude'),
    schema: schemas.decimal(
      i18n('entities.place.fields.longitude'),
      {},
    ),
  },
  {
    name: 'address',
    label: i18n('entities.place.fields.address'),
    schema: schemas.string(
      i18n('entities.place.fields.address'),
      {},
    ),
  },
  {
    name: 'addressNumber',
    label: i18n('entities.place.fields.addressNumber'),
    schema: schemas.string(
      i18n('entities.place.fields.addressNumber'),
      {},
    ),
  },
  {
    name: 'addressZipCode',
    label: i18n('entities.place.fields.addressZipCode'),
    schema: schemas.string(
      i18n('entities.place.fields.addressZipCode'),
      {},
    ),
  },
  {
    name: 'addressCity',
    label: i18n('entities.place.fields.addressCity'),
    schema: schemas.string(
      i18n('entities.place.fields.addressCity'),
      {},
    ),
  },
  {
    name: 'addressState',
    label: i18n('entities.place.fields.addressState'),
    schema: schemas.string(
      i18n('entities.place.fields.addressState'),
      {},
    ),
  },
  {
    name: 'addressCountry',
    label: i18n('entities.place.fields.addressCountry'),
    schema: schemas.relationToOne(
      i18n('entities.place.fields.addressCountry'),
      {},
    ),
  },
  {
    name: 'openTime',
    label: i18n('entities.place.fields.openTime'),
    schema: schemas.string(
      i18n('entities.place.fields.openTime'),
      {},
    ),
  },
  {
    name: 'closeTime',
    label: i18n('entities.place.fields.closeTime'),
    schema: schemas.string(
      i18n('entities.place.fields.closeTime'),
      {},
    ),
  },
  {
    name: 'is24hours',
    label: i18n('entities.place.fields.is24hours'),
    schema: schemas.boolean(
      i18n('entities.place.fields.is24hours'),
      {},
    ),
  },
  {
    name: 'stars',
    label: i18n('entities.place.fields.stars'),
    schema: schemas.decimal(
      i18n('entities.place.fields.stars'),
      {},
    ),
  },
  {
    name: 'isOpen',
    label: i18n('entities.place.fields.isOpen'),
    schema: schemas.boolean(
      i18n('entities.place.fields.isOpen'),
      {},
    ),
  },
  {
    name: 'photoLogo',
    label: i18n('entities.place.fields.photoLogo'),
    schema: schemas.images(
      i18n('entities.place.fields.photoLogo'),
      {},
    ),
  },
  {
    name: 'photoStore',
    label: i18n('entities.place.fields.photoStore'),
    schema: schemas.images(
      i18n('entities.place.fields.photoStore'),
      {},
    ),
  },
];