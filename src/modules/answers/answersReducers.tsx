import list from 'src/modules/answers/list/answersListReducers';
import form from 'src/modules/answers/form/answersFormReducers';
import view from 'src/modules/answers/view/answersViewReducers';
import destroy from 'src/modules/answers/destroy/answersDestroyReducers';
import importerReducer from 'src/modules/answers/importer/answersImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
