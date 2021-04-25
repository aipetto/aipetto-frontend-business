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
    name: 'businessId',
    label: i18n('entities.place.fields.businessId'),
    schema: schemas.relationToOne(
      i18n('entities.place.fields.businessId'),
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
];