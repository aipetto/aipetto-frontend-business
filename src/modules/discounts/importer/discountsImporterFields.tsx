import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'businessID',
    label: i18n('entities.discounts.fields.businessID'),
    schema: schemas.relationToOne(
      i18n('entities.discounts.fields.businessID'),
      {},
    ),
  },
  {
    name: 'codeName',
    label: i18n('entities.discounts.fields.codeName'),
    schema: schemas.string(
      i18n('entities.discounts.fields.codeName'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'discountPercentage',
    label: i18n('entities.discounts.fields.discountPercentage'),
    schema: schemas.decimal(
      i18n('entities.discounts.fields.discountPercentage'),
      {
        "min": 0.01
      },
    ),
  },
  {
    name: 'expirationDate',
    label: i18n('entities.discounts.fields.expirationDate'),
    schema: schemas.date(
      i18n('entities.discounts.fields.expirationDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
];