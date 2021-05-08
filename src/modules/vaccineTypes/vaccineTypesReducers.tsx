import list from 'src/modules/vaccineTypes/list/vaccineTypesListReducers';
import form from 'src/modules/vaccineTypes/form/vaccineTypesFormReducers';
import view from 'src/modules/vaccineTypes/view/vaccineTypesViewReducers';
import destroy from 'src/modules/vaccineTypes/destroy/vaccineTypesDestroyReducers';
import importerReducer from 'src/modules/vaccineTypes/importer/vaccineTypesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
