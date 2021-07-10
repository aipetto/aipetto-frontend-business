import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/postCategories/importer/postCategoriesImporterSelectors';
import PostCategoriesService from 'src/modules/postCategories/postCategoriesService';
import fields from 'src/modules/postCategories/importer/postCategoriesImporterFields';
import { i18n } from 'src/i18n';

const postCategoriesImporterActions = importerActions(
  'POSTCATEGORIES_IMPORTER',
  selectors,
  PostCategoriesService.import,
  fields,
  i18n('entities.postCategories.importer.fileName'),
);

export default postCategoriesImporterActions;