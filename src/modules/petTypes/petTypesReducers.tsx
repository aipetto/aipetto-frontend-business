import list from 'src/modules/petTypes/list/petTypesListReducers';
import form from 'src/modules/petTypes/form/petTypesFormReducers';
import view from 'src/modules/petTypes/view/petTypesViewReducers';
import destroy from 'src/modules/petTypes/destroy/petTypesDestroyReducers';
import importerReducer from 'src/modules/petTypes/importer/petTypesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
