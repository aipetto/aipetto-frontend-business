import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/answers/importer/answersImporterSelectors';
import AnswersService from 'src/modules/answers/answersService';
import fields from 'src/modules/answers/importer/answersImporterFields';
import { i18n } from 'src/i18n';

const answersImporterActions = importerActions(
  'ANSWERS_IMPORTER',
  selectors,
  AnswersService.import,
  fields,
  i18n('entities.answers.importer.fileName'),
);

export default answersImporterActions;