import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.petExamination.fields.id'),
  },
  {
    name: 'petID',
    label: i18n('entities.petExamination.fields.petID'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'examinationInternalCode',
    label: i18n('entities.petExamination.fields.examinationInternalCode'),
  },
  {
    name: 'veterinariesResponsibleDiagnostic',
    label: i18n('entities.petExamination.fields.veterinariesResponsibleDiagnostic'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'businessID',
    label: i18n('entities.petExamination.fields.businessID'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'language',
    label: i18n('entities.petExamination.fields.language'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'providersID',
    label: i18n('entities.petExamination.fields.providersID'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'statusExamination',
    label: i18n('entities.petExamination.fields.statusExamination'),
  },
  {
    name: 'examinationsFiles',
    label: i18n('entities.petExamination.fields.examinationsFiles'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'examinationImages',
    label: i18n('entities.petExamination.fields.examinationImages'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'examinationDiagnosticNotes',
    label: i18n('entities.petExamination.fields.examinationDiagnosticNotes'),
  },
  {
    name: 'examinationRecommendationNotes',
    label: i18n('entities.petExamination.fields.examinationRecommendationNotes'),
  },
  {
    name: 'nextExaminationSession',
    label: i18n('entities.petExamination.fields.nextExaminationSession'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.petExamination.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.petExamination.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
