import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.currency.fields.name'),
    schema: schemas.string(
      i18n('entities.currency.fields.name'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'symbol',
    label: i18n('entities.currency.fields.symbol'),
    schema: schemas.string(
      i18n('entities.currency.fields.symbol'),
      {},
    ),
  },
  {
    name: 'active',
    label: i18n('entities.currency.fields.active'),
    schema: schemas.boolean(
      i18n('entities.currency.fields.active'),
      {},
    ),
  },
];