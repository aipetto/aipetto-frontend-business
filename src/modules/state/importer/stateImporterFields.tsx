import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.state.fields.name'),
    schema: schemas.string(
      i18n('entities.state.fields.name'),
      {},
    ),
  },
  {
    name: 'country',
    label: i18n('entities.state.fields.country'),
    schema: schemas.relationToOne(
      i18n('entities.state.fields.country'),
      {},
    ),
  },
  {
    name: 'initials',
    label: i18n('entities.state.fields.initials'),
    schema: schemas.string(
      i18n('entities.state.fields.initials'),
      {},
    ),
  },
];