import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.country.fields.name'),
    schema: schemas.string(
      i18n('entities.country.fields.name'),
      {},
    ),
  },
  {
    name: 'initials',
    label: i18n('entities.country.fields.initials'),
    schema: schemas.string(
      i18n('entities.country.fields.initials'),
      {},
    ),
  },
];