import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/landingSurvey/importer/landingSurveyImporterSelectors';
import LandingSurveyService from 'src/modules/landingSurvey/landingSurveyService';
import fields from 'src/modules/landingSurvey/importer/landingSurveyImporterFields';
import { i18n } from 'src/i18n';

const landingSurveyImporterActions = importerActions(
  'LANDINGSURVEY_IMPORTER',
  selectors,
  LandingSurveyService.import,
  fields,
  i18n('entities.landingSurvey.importer.fileName'),
);

export default landingSurveyImporterActions;