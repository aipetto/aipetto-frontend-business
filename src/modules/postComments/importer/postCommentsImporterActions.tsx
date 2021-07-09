import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/postComments/importer/postCommentsImporterSelectors';
import PostCommentsService from 'src/modules/postComments/postCommentsService';
import fields from 'src/modules/postComments/importer/postCommentsImporterFields';
import { i18n } from 'src/i18n';

const postCommentsImporterActions = importerActions(
  'POSTCOMMENTS_IMPORTER',
  selectors,
  PostCommentsService.import,
  fields,
  i18n('entities.postComments.importer.fileName'),
);

export default postCommentsImporterActions;