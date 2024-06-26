import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'sku',
    label: i18n('entities.product.fields.sku'),
    schema: schemas.string(
      i18n('entities.product.fields.sku'),
      {},
    ),
  },
  {
    name: 'name',
    label: i18n('entities.product.fields.name'),
    schema: schemas.string(
      i18n('entities.product.fields.name'),
      {
        "required": true,
        "min": 2,
        "max": 255
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.product.fields.description'),
    schema: schemas.string(
      i18n('entities.product.fields.description'),
      {
        "max": 21845
      },
    ),
  },
  {
    name: 'unitPrice',
    label: i18n('entities.product.fields.unitPrice'),
    schema: schemas.decimal(
      i18n('entities.product.fields.unitPrice'),
      {
        "required": true,
        "scale": 2,
        "min": 0.01,
        "max": 99999
      },
    ),
  },
  {
    name: 'photos',
    label: i18n('entities.product.fields.photos'),
    schema: schemas.images(
      i18n('entities.product.fields.photos'),
      {
        "max": 3
      },
    ),
  },
  {
    name: 'businessId',
    label: i18n('entities.product.fields.businessId'),
    schema: schemas.relationToOne(
      i18n('entities.product.fields.businessId'),
      {},
    ),
  },
  {
    name: 'acceptPointsToShop',
    label: i18n('entities.product.fields.acceptPointsToShop'),
    schema: schemas.boolean(
      i18n('entities.product.fields.acceptPointsToShop'),
      {},
    ),
  },
  {
    name: 'pointsPrice',
    label: i18n('entities.product.fields.pointsPrice'),
    schema: schemas.integer(
      i18n('entities.product.fields.pointsPrice'),
      {},
    ),
  },
  {
    name: 'currency',
    label: i18n('entities.product.fields.currency'),
    schema: schemas.relationToOne(
      i18n('entities.product.fields.currency'),
      {},
    ),
  },
  {
    name: 'language',
    label: i18n('entities.product.fields.language'),
    schema: schemas.relationToOne(
      i18n('entities.product.fields.language'),
      {},
    ),
  },
  {
    name: 'country',
    label: i18n('entities.product.fields.country'),
    schema: schemas.relationToOne(
      i18n('entities.product.fields.country'),
      {},
    ),
  },
  {
    name: 'barcode',
    label: i18n('entities.product.fields.barcode'),
    schema: schemas.integer(
      i18n('entities.product.fields.barcode'),
      {
        "max": 13
      },
    ),
  },
  {
    name: 'productNCM',
    label: i18n('entities.product.fields.productNCM'),
    schema: schemas.integer(
      i18n('entities.product.fields.productNCM'),
      {
        "max": 6
      },
    ),
  },
  {
    name: 'inStock',
    label: i18n('entities.product.fields.inStock'),
    schema: schemas.integer(
      i18n('entities.product.fields.inStock'),
      {},
    ),
  },
];