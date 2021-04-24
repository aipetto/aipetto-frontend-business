import list from 'src/modules/professionalsServiceAvailability/list/professionalsServiceAvailabilityListReducers';
import form from 'src/modules/professionalsServiceAvailability/form/professionalsServiceAvailabilityFormReducers';
import view from 'src/modules/professionalsServiceAvailability/view/professionalsServiceAvailabilityViewReducers';
import destroy from 'src/modules/professionalsServiceAvailability/destroy/professionalsServiceAvailabilityDestroyReducers';
import importerReducer from 'src/modules/professionalsServiceAvailability/importer/professionalsServiceAvailabilityImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
