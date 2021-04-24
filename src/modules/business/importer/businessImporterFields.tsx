import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.business.fields.name'),
    schema: schemas.string(
      i18n('entities.business.fields.name'),
      {},
    ),
  },
  {
    name: 'services',
    label: i18n('entities.business.fields.services'),
    schema: schemas.relationToMany(
      i18n('entities.business.fields.services'),
      {},
    ),
  },
  {
    name: 'contactName',
    label: i18n('entities.business.fields.contactName'),
    schema: schemas.string(
      i18n('entities.business.fields.contactName'),
      {},
    ),
  },
  {
    name: 'contactPhone',
    label: i18n('entities.business.fields.contactPhone'),
    schema: schemas.string(
      i18n('entities.business.fields.contactPhone'),
      {},
    ),
  },
  {
    name: 'contactWhatsApp',
    label: i18n('entities.business.fields.contactWhatsApp'),
    schema: schemas.string(
      i18n('entities.business.fields.contactWhatsApp'),
      {},
    ),
  },
  {
    name: 'contactEmail',
    label: i18n('entities.business.fields.contactEmail'),
    schema: schemas.string(
      i18n('entities.business.fields.contactEmail'),
      {},
    ),
  },
  {
    name: 'addressStreet',
    label: i18n('entities.business.fields.addressStreet'),
    schema: schemas.string(
      i18n('entities.business.fields.addressStreet'),
      {},
    ),
  },
  {
    name: 'addressStreetNumber',
    label: i18n('entities.business.fields.addressStreetNumber'),
    schema: schemas.string(
      i18n('entities.business.fields.addressStreetNumber'),
      {},
    ),
  },
  {
    name: 'addressPostCode',
    label: i18n('entities.business.fields.addressPostCode'),
    schema: schemas.string(
      i18n('entities.business.fields.addressPostCode'),
      {},
    ),
  },
  {
    name: 'city',
    label: i18n('entities.business.fields.city'),
    schema: schemas.relationToOne(
      i18n('entities.business.fields.city'),
      {},
    ),
  },
  {
    name: 'state',
    label: i18n('entities.business.fields.state'),
    schema: schemas.relationToOne(
      i18n('entities.business.fields.state'),
      {},
    ),
  },
  {
    name: 'country',
    label: i18n('entities.business.fields.country'),
    schema: schemas.relationToOne(
      i18n('entities.business.fields.country'),
      {},
    ),
  },
];