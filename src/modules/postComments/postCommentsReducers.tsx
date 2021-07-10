import list from 'src/modules/postComments/list/postCommentsListReducers';
import form from 'src/modules/postComments/form/postCommentsFormReducers';
import view from 'src/modules/postComments/view/postCommentsViewReducers';
import destroy from 'src/modules/postComments/destroy/postCommentsDestroyReducers';
import importerReducer from 'src/modules/postComments/importer/postCommentsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
