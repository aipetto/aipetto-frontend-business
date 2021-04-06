import list from 'src/modules/pet/list/petListReducers';
import form from 'src/modules/pet/form/petFormReducers';
import view from 'src/modules/pet/view/petViewReducers';
import destroy from 'src/modules/pet/destroy/petDestroyReducers';
import importerReducer from 'src/modules/pet/importer/petImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
