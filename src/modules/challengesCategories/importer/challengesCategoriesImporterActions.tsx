import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/challengesCategories/importer/challengesCategoriesImporterSelectors';
import ChallengesCategoriesService from 'src/modules/challengesCategories/challengesCategoriesService';
import fields from 'src/modules/challengesCategories/importer/challengesCategoriesImporterFields';
import { i18n } from 'src/i18n';

const challengesCategoriesImporterActions = importerActions(
  'CHALLENGESCATEGORIES_IMPORTER',
  selectors,
  ChallengesCategoriesService.import,
  fields,
  i18n('entities.challengesCategories.importer.fileName'),
);

export default challengesCategoriesImporterActions;