import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.pointsChallenges.fields.name'),
    schema: schemas.string(
      i18n('entities.pointsChallenges.fields.name'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'points',
    label: i18n('entities.pointsChallenges.fields.points'),
    schema: schemas.integer(
      i18n('entities.pointsChallenges.fields.points'),
      {},
    ),
  },
  {
    name: 'country',
    label: i18n('entities.pointsChallenges.fields.country'),
    schema: schemas.relationToOne(
      i18n('entities.pointsChallenges.fields.country'),
      {},
    ),
  },
];