import list from 'src/modules/languages/list/languagesListReducers';
import form from 'src/modules/languages/form/languagesFormReducers';
import view from 'src/modules/languages/view/languagesViewReducers';
import destroy from 'src/modules/languages/destroy/languagesDestroyReducers';
import importerReducer from 'src/modules/languages/importer/languagesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
