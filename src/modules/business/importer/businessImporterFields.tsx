import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'businessID',
    label: i18n('entities.business.fields.businessID'),
    schema: schemas.string(
      i18n('entities.business.fields.businessID'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'name',
    label: i18n('entities.business.fields.name'),
    schema: schemas.string(
      i18n('entities.business.fields.name'),
      {
        "required": true
      },
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
    name: 'categories',
    label: i18n('entities.business.fields.categories'),
    schema: schemas.relationToMany(
      i18n('entities.business.fields.categories'),
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
    name: 'streetComplement',
    label: i18n('entities.business.fields.streetComplement'),
    schema: schemas.string(
      i18n('entities.business.fields.streetComplement'),
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
  {
    name: 'businessLogo',
    label: i18n('entities.business.fields.businessLogo'),
    schema: schemas.images(
      i18n('entities.business.fields.businessLogo'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'latitude',
    label: i18n('entities.business.fields.latitude'),
    schema: schemas.string(
      i18n('entities.business.fields.latitude'),
      {},
    ),
  },
  {
    name: 'longitude',
    label: i18n('entities.business.fields.longitude'),
    schema: schemas.string(
      i18n('entities.business.fields.longitude'),
      {},
    ),
  },
  {
    name: 'website',
    label: i18n('entities.business.fields.website'),
    schema: schemas.string(
      i18n('entities.business.fields.website'),
      {},
    ),
  },
  {
    name: 'facebook',
    label: i18n('entities.business.fields.facebook'),
    schema: schemas.string(
      i18n('entities.business.fields.facebook'),
      {},
    ),
  },
  {
    name: 'linkedin',
    label: i18n('entities.business.fields.linkedin'),
    schema: schemas.string(
      i18n('entities.business.fields.linkedin'),
      {},
    ),
  },
  {
    name: 'notes',
    label: i18n('entities.business.fields.notes'),
    schema: schemas.string(
      i18n('entities.business.fields.notes'),
      {},
    ),
  },
  {
    name: 'language',
    label: i18n('entities.business.fields.language'),
    schema: schemas.relationToOne(
      i18n('entities.business.fields.language'),
      {},
    ),
  },
  {
    name: 'currency',
    label: i18n('entities.business.fields.currency'),
    schema: schemas.relationToOne(
      i18n('entities.business.fields.currency'),
      {},
    ),
  },
  {
    name: 'instagram',
    label: i18n('entities.business.fields.instagram'),
    schema: schemas.string(
      i18n('entities.business.fields.instagram'),
      {},
    ),
  },
  {
    name: 'campaingTrackerID',
    label: i18n('entities.business.fields.campaingTrackerID'),
    schema: schemas.string(
      i18n('entities.business.fields.campaingTrackerID'),
      {},
    ),
  },
];