import list from 'src/modules/businessServicesTypes/list/businessServicesTypesListReducers';
import form from 'src/modules/businessServicesTypes/form/businessServicesTypesFormReducers';
import view from 'src/modules/businessServicesTypes/view/businessServicesTypesViewReducers';
import destroy from 'src/modules/businessServicesTypes/destroy/businessServicesTypesDestroyReducers';
import importerReducer from 'src/modules/businessServicesTypes/importer/businessServicesTypesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
