import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.businessServicesTypes.fields.name'),
    schema: schemas.string(
      i18n('entities.businessServicesTypes.fields.name'),
      {},
    ),
  },
  {
    name: 'category',
    label: i18n('entities.businessServicesTypes.fields.category'),
    schema: schemas.relationToOne(
      i18n('entities.businessServicesTypes.fields.category'),
      {},
    ),
  },
  {
    name: 'language',
    label: i18n('entities.businessServicesTypes.fields.language'),
    schema: schemas.relationToOne(
      i18n('entities.businessServicesTypes.fields.language'),
      {},
    ),
  },
  {
    name: 'serviceImage',
    label: i18n('entities.businessServicesTypes.fields.serviceImage'),
    schema: schemas.images(
      i18n('entities.businessServicesTypes.fields.serviceImage'),
      {},
    ),
  },
];