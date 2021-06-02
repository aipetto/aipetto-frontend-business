import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/newBusinessSurvey/importer/newBusinessSurveyImporterSelectors';
import NewBusinessSurveyService from 'src/modules/newBusinessSurvey/newBusinessSurveyService';
import fields from 'src/modules/newBusinessSurvey/importer/newBusinessSurveyImporterFields';
import { i18n } from 'src/i18n';

const newBusinessSurveyImporterActions = importerActions(
  'NEWBUSINESSSURVEY_IMPORTER',
  selectors,
  NewBusinessSurveyService.import,
  fields,
  i18n('entities.newBusinessSurvey.importer.fileName'),
);

export default newBusinessSurveyImporterActions;