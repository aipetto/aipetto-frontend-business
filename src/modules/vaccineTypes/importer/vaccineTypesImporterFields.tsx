import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.vaccineTypes.fields.name'),
    schema: schemas.string(
      i18n('entities.vaccineTypes.fields.name'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'country',
    label: i18n('entities.vaccineTypes.fields.country'),
    schema: schemas.relationToOne(
      i18n('entities.vaccineTypes.fields.country'),
      {},
    ),
  },
];