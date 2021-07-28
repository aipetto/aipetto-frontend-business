import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'from',
    label: i18n('entities.messages.fields.from'),
    schema: schemas.relationToOne(
      i18n('entities.messages.fields.from'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'to',
    label: i18n('entities.messages.fields.to'),
    schema: schemas.relationToOne(
      i18n('entities.messages.fields.to'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'message',
    label: i18n('entities.messages.fields.message'),
    schema: schemas.string(
      i18n('entities.messages.fields.message'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'businessId',
    label: i18n('entities.messages.fields.businessId'),
    schema: schemas.relationToOne(
      i18n('entities.messages.fields.businessId'),
      {},
    ),
  },
  {
    name: 'language',
    label: i18n('entities.messages.fields.language'),
    schema: schemas.relationToOne(
      i18n('entities.messages.fields.language'),
      {},
    ),
  },
];