import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'service',
    label: i18n('entities.businessServicesPrices.fields.service'),
    schema: schemas.relationToOne(
      i18n('entities.businessServicesPrices.fields.service'),
      {},
    ),
  },
  {
    name: 'businessId',
    label: i18n('entities.businessServicesPrices.fields.businessId'),
    schema: schemas.relationToOne(
      i18n('entities.businessServicesPrices.fields.businessId'),
      {},
    ),
  },
  {
    name: 'servicePrice',
    label: i18n('entities.businessServicesPrices.fields.servicePrice'),
    schema: schemas.decimal(
      i18n('entities.businessServicesPrices.fields.servicePrice'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'currency',
    label: i18n('entities.businessServicesPrices.fields.currency'),
    schema: schemas.relationToOne(
      i18n('entities.businessServicesPrices.fields.currency'),
      {},
    ),
  },
  {
    name: 'isFree',
    label: i18n('entities.businessServicesPrices.fields.isFree'),
    schema: schemas.boolean(
      i18n('entities.businessServicesPrices.fields.isFree'),
      {},
    ),
  },
];