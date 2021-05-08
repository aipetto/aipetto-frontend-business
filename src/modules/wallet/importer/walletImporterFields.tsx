import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'totalCredits',
    label: i18n('entities.wallet.fields.totalCredits'),
    schema: schemas.decimal(
      i18n('entities.wallet.fields.totalCredits'),
      {
        "min": 0
      },
    ),
  },
  {
    name: 'aipettoPoints',
    label: i18n('entities.wallet.fields.aipettoPoints'),
    schema: schemas.integer(
      i18n('entities.wallet.fields.aipettoPoints'),
      {
        "min": 0
      },
    ),
  },
];