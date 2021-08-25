import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import contactsEnumerators from 'src/modules/contacts/contactsEnumerators';

export default [
  {
    name: 'firstName',
    label: i18n('entities.contacts.fields.firstName'),
    schema: schemas.string(
      i18n('entities.contacts.fields.firstName'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'lastName',
    label: i18n('entities.contacts.fields.lastName'),
    schema: schemas.string(
      i18n('entities.contacts.fields.lastName'),
      {},
    ),
  },
  {
    name: 'email',
    label: i18n('entities.contacts.fields.email'),
    schema: schemas.string(
      i18n('entities.contacts.fields.email'),
      {},
    ),
  },
  {
    name: 'cellphone',
    label: i18n('entities.contacts.fields.cellphone'),
    schema: schemas.string(
      i18n('entities.contacts.fields.cellphone'),
      {},
    ),
  },
  {
    name: 'whatsapp',
    label: i18n('entities.contacts.fields.whatsapp'),
    schema: schemas.string(
      i18n('entities.contacts.fields.whatsapp'),
      {},
    ),
  },
  {
    name: 'source',
    label: i18n('entities.contacts.fields.source'),
    schema: schemas.enumerator(
      i18n('entities.contacts.fields.source'),
      {
        "options": contactsEnumerators.source
      },
    ),
  },
  {
    name: 'country',
    label: i18n('entities.contacts.fields.country'),
    schema: schemas.relationToOne(
      i18n('entities.contacts.fields.country'),
      {},
    ),
  },
  {
    name: 'city',
    label: i18n('entities.contacts.fields.city'),
    schema: schemas.string(
      i18n('entities.contacts.fields.city'),
      {},
    ),
  },
  {
    name: 'addressStreetName',
    label: i18n('entities.contacts.fields.addressStreetName'),
    schema: schemas.string(
      i18n('entities.contacts.fields.addressStreetName'),
      {},
    ),
  },
  {
    name: 'addressStreetNumber',
    label: i18n('entities.contacts.fields.addressStreetNumber'),
    schema: schemas.string(
      i18n('entities.contacts.fields.addressStreetNumber'),
      {},
    ),
  },
  {
    name: 'addressStreetComplement',
    label: i18n('entities.contacts.fields.addressStreetComplement'),
    schema: schemas.string(
      i18n('entities.contacts.fields.addressStreetComplement'),
      {},
    ),
  },
  {
    name: 'statusContact',
    label: i18n('entities.contacts.fields.statusContact'),
    schema: schemas.boolean(
      i18n('entities.contacts.fields.statusContact'),
      {},
    ),
  },
  {
    name: 'contactType',
    label: i18n('entities.contacts.fields.contactType'),
    schema: schemas.enumerator(
      i18n('entities.contacts.fields.contactType'),
      {
        "options": contactsEnumerators.contactType
      },
    ),
  },
  {
    name: 'customerID',
    label: i18n('entities.contacts.fields.customerID'),
    schema: schemas.relationToMany(
      i18n('entities.contacts.fields.customerID'),
      {},
    ),
  },
  {
    name: 'businessID',
    label: i18n('entities.contacts.fields.businessID'),
    schema: schemas.relationToOne(
      i18n('entities.contacts.fields.businessID'),
      {},
    ),
  },
  {
    name: 'companyName',
    label: i18n('entities.contacts.fields.companyName'),
    schema: schemas.string(
      i18n('entities.contacts.fields.companyName'),
      {},
    ),
  },
  {
    name: 'website',
    label: i18n('entities.contacts.fields.website'),
    schema: schemas.string(
      i18n('entities.contacts.fields.website'),
      {},
    ),
  },
  {
    name: 'linkedinProfile',
    label: i18n('entities.contacts.fields.linkedinProfile'),
    schema: schemas.string(
      i18n('entities.contacts.fields.linkedinProfile'),
      {},
    ),
  },
  {
    name: 'instagramProfile',
    label: i18n('entities.contacts.fields.instagramProfile'),
    schema: schemas.string(
      i18n('entities.contacts.fields.instagramProfile'),
      {},
    ),
  },
  {
    name: 'facebookProfile',
    label: i18n('entities.contacts.fields.facebookProfile'),
    schema: schemas.string(
      i18n('entities.contacts.fields.facebookProfile'),
      {},
    ),
  },
  {
    name: 'isDeveloper',
    label: i18n('entities.contacts.fields.isDeveloper'),
    schema: schemas.boolean(
      i18n('entities.contacts.fields.isDeveloper'),
      {},
    ),
  },
  {
    name: 'isActive',
    label: i18n('entities.contacts.fields.isActive'),
    schema: schemas.boolean(
      i18n('entities.contacts.fields.isActive'),
      {},
    ),
  },
  {
    name: 'contactProfilePhoto',
    label: i18n('entities.contacts.fields.contactProfilePhoto'),
    schema: schemas.images(
      i18n('entities.contacts.fields.contactProfilePhoto'),
      {},
    ),
  },
  {
    name: 'language',
    label: i18n('entities.contacts.fields.language'),
    schema: schemas.relationToOne(
      i18n('entities.contacts.fields.language'),
      {},
    ),
  },
];