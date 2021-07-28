import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.product.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.product.fields.name'),
  },
  {
    name: 'description',
    label: i18n('entities.product.fields.description'),
  },
  {
    name: 'unitPrice',
    label: i18n('entities.product.fields.unitPrice'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'photos',
    label: i18n('entities.product.fields.photos'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'businessId',
    label: i18n('entities.product.fields.businessId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'acceptPointsToShop',
    label: i18n('entities.product.fields.acceptPointsToShop'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'pointsPrice',
    label: i18n('entities.product.fields.pointsPrice'),
  },
  {
    name: 'currency',
    label: i18n('entities.product.fields.currency'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'language',
    label: i18n('entities.product.fields.language'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.product.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.product.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
