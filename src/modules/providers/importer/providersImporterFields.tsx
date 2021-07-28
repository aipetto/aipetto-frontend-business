import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.providers.fields.name'),
    schema: schemas.string(
      i18n('entities.providers.fields.name'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'businessID',
    label: i18n('entities.providers.fields.businessID'),
    schema: schemas.relationToOne(
      i18n('entities.providers.fields.businessID'),
      {},
    ),
  },
  {
    name: 'providerID',
    label: i18n('entities.providers.fields.providerID'),
    schema: schemas.string(
      i18n('entities.providers.fields.providerID'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'category',
    label: i18n('entities.providers.fields.category'),
    schema: schemas.relationToMany(
      i18n('entities.providers.fields.category'),
      {},
    ),
  },
  {
    name: 'serviceTypes',
    label: i18n('entities.providers.fields.serviceTypes'),
    schema: schemas.relationToMany(
      i18n('entities.providers.fields.serviceTypes'),
      {},
    ),
  },
  {
    name: 'contactName',
    label: i18n('entities.providers.fields.contactName'),
    schema: schemas.string(
      i18n('entities.providers.fields.contactName'),
      {},
    ),
  },
  {
    name: 'contactPhone',
    label: i18n('entities.providers.fields.contactPhone'),
    schema: schemas.string(
      i18n('entities.providers.fields.contactPhone'),
      {},
    ),
  },
  {
    name: 'contactWhatsApp',
    label: i18n('entities.providers.fields.contactWhatsApp'),
    schema: schemas.string(
      i18n('entities.providers.fields.contactWhatsApp'),
      {},
    ),
  },
  {
    name: 'addressStreet',
    label: i18n('entities.providers.fields.addressStreet'),
    schema: schemas.string(
      i18n('entities.providers.fields.addressStreet'),
      {},
    ),
  },
  {
    name: 'addressStreetNumber',
    label: i18n('entities.providers.fields.addressStreetNumber'),
    schema: schemas.string(
      i18n('entities.providers.fields.addressStreetNumber'),
      {},
    ),
  },
  {
    name: 'addressPostCode',
    label: i18n('entities.providers.fields.addressPostCode'),
    schema: schemas.string(
      i18n('entities.providers.fields.addressPostCode'),
      {},
    ),
  },
  {
    name: 'city',
    label: i18n('entities.providers.fields.city'),
    schema: schemas.relationToOne(
      i18n('entities.providers.fields.city'),
      {},
    ),
  },
  {
    name: 'state',
    label: i18n('entities.providers.fields.state'),
    schema: schemas.relationToOne(
      i18n('entities.providers.fields.state'),
      {},
    ),
  },
  {
    name: 'country',
    label: i18n('entities.providers.fields.country'),
    schema: schemas.relationToOne(
      i18n('entities.providers.fields.country'),
      {},
    ),
  },
  {
    name: 'email',
    label: i18n('entities.providers.fields.email'),
    schema: schemas.string(
      i18n('entities.providers.fields.email'),
      {},
    ),
  },
  {
    name: 'latitude',
    label: i18n('entities.providers.fields.latitude'),
    schema: schemas.decimal(
      i18n('entities.providers.fields.latitude'),
      {},
    ),
  },
  {
    name: 'longitude',
    label: i18n('entities.providers.fields.longitude'),
    schema: schemas.decimal(
      i18n('entities.providers.fields.longitude'),
      {},
    ),
  },
  {
    name: 'basePricePerService',
    label: i18n('entities.providers.fields.basePricePerService'),
    schema: schemas.decimal(
      i18n('entities.providers.fields.basePricePerService'),
      {},
    ),
  },
  {
    name: 'currency',
    label: i18n('entities.providers.fields.currency'),
    schema: schemas.relationToOne(
      i18n('entities.providers.fields.currency'),
      {},
    ),
  },
];