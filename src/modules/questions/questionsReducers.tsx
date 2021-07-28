import list from 'src/modules/questions/list/questionsListReducers';
import form from 'src/modules/questions/form/questionsFormReducers';
import view from 'src/modules/questions/view/questionsViewReducers';
import destroy from 'src/modules/questions/destroy/questionsDestroyReducers';
import importerReducer from 'src/modules/questions/importer/questionsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
