import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/questions/importer/questionsImporterSelectors';
import QuestionsService from 'src/modules/questions/questionsService';
import fields from 'src/modules/questions/importer/questionsImporterFields';
import { i18n } from 'src/i18n';

const questionsImporterActions = importerActions(
  'QUESTIONS_IMPORTER',
  selectors,
  QuestionsService.import,
  fields,
  i18n('entities.questions.importer.fileName'),
);

export default questionsImporterActions;