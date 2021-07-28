import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import petExaminationEnumerators from 'src/modules/petExamination/petExaminationEnumerators';

export default [
  {
    name: 'petID',
    label: i18n('entities.petExamination.fields.petID'),
    schema: schemas.relationToOne(
      i18n('entities.petExamination.fields.petID'),
      {},
    ),
  },
  {
    name: 'examinationInternalCode',
    label: i18n('entities.petExamination.fields.examinationInternalCode'),
    schema: schemas.string(
      i18n('entities.petExamination.fields.examinationInternalCode'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'veterinariesResponsibleDiagnostic',
    label: i18n('entities.petExamination.fields.veterinariesResponsibleDiagnostic'),
    schema: schemas.relationToMany(
      i18n('entities.petExamination.fields.veterinariesResponsibleDiagnostic'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'businessID',
    label: i18n('entities.petExamination.fields.businessID'),
    schema: schemas.relationToOne(
      i18n('entities.petExamination.fields.businessID'),
      {},
    ),
  },
  {
    name: 'language',
    label: i18n('entities.petExamination.fields.language'),
    schema: schemas.relationToOne(
      i18n('entities.petExamination.fields.language'),
      {},
    ),
  },
  {
    name: 'providersID',
    label: i18n('entities.petExamination.fields.providersID'),
    schema: schemas.relationToMany(
      i18n('entities.petExamination.fields.providersID'),
      {},
    ),
  },
  {
    name: 'statusExamination',
    label: i18n('entities.petExamination.fields.statusExamination'),
    schema: schemas.enumerator(
      i18n('entities.petExamination.fields.statusExamination'),
      {
        "options": petExaminationEnumerators.statusExamination
      },
    ),
  },
  {
    name: 'examinationsFiles',
    label: i18n('entities.petExamination.fields.examinationsFiles'),
    schema: schemas.files(
      i18n('entities.petExamination.fields.examinationsFiles'),
      {},
    ),
  },
  {
    name: 'examinationImages',
    label: i18n('entities.petExamination.fields.examinationImages'),
    schema: schemas.images(
      i18n('entities.petExamination.fields.examinationImages'),
      {},
    ),
  },
];