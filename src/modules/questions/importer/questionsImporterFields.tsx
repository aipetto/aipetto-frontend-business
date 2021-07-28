import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import questionsEnumerators from 'src/modules/questions/questionsEnumerators';

export default [
  {
    name: 'question',
    label: i18n('entities.questions.fields.question'),
    schema: schemas.string(
      i18n('entities.questions.fields.question'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'type',
    label: i18n('entities.questions.fields.type'),
    schema: schemas.enumerator(
      i18n('entities.questions.fields.type'),
      {
        "options": questionsEnumerators.type
      },
    ),
  },
  {
    name: 'userID',
    label: i18n('entities.questions.fields.userID'),
    schema: schemas.relationToOne(
      i18n('entities.questions.fields.userID'),
      {},
    ),
  },
  {
    name: 'isActive',
    label: i18n('entities.questions.fields.isActive'),
    schema: schemas.boolean(
      i18n('entities.questions.fields.isActive'),
      {},
    ),
  },
  {
    name: 'language',
    label: i18n('entities.questions.fields.language'),
    schema: schemas.relationToOne(
      i18n('entities.questions.fields.language'),
      {},
    ),
  },
  {
    name: 'country',
    label: i18n('entities.questions.fields.country'),
    schema: schemas.relationToOne(
      i18n('entities.questions.fields.country'),
      {},
    ),
  },
];