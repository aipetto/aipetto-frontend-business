import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import answersEnumerators from 'src/modules/answers/answersEnumerators';

export default [
  {
    name: 'answer',
    label: i18n('entities.answers.fields.answer'),
    schema: schemas.string(
      i18n('entities.answers.fields.answer'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'userID',
    label: i18n('entities.answers.fields.userID'),
    schema: schemas.relationToOne(
      i18n('entities.answers.fields.userID'),
      {},
    ),
  },
  {
    name: 'type',
    label: i18n('entities.answers.fields.type'),
    schema: schemas.enumerator(
      i18n('entities.answers.fields.type'),
      {
        "options": answersEnumerators.type
      },
    ),
  },
  {
    name: 'isActive',
    label: i18n('entities.answers.fields.isActive'),
    schema: schemas.boolean(
      i18n('entities.answers.fields.isActive'),
      {},
    ),
  },
  {
    name: 'questionID',
    label: i18n('entities.answers.fields.questionID'),
    schema: schemas.relationToMany(
      i18n('entities.answers.fields.questionID'),
      {},
    ),
  },
  {
    name: 'language',
    label: i18n('entities.answers.fields.language'),
    schema: schemas.relationToOne(
      i18n('entities.answers.fields.language'),
      {},
    ),
  },
];