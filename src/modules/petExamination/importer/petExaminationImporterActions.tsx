import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/petExamination/importer/petExaminationImporterSelectors';
import PetExaminationService from 'src/modules/petExamination/petExaminationService';
import fields from 'src/modules/petExamination/importer/petExaminationImporterFields';
import { i18n } from 'src/i18n';

const petExaminationImporterActions = importerActions(
  'PETEXAMINATION_IMPORTER',
  selectors,
  PetExaminationService.import,
  fields,
  i18n('entities.petExamination.importer.fileName'),
);

export default petExaminationImporterActions;