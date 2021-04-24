import list from 'src/modules/businessPlaceServiceAvailability/list/businessPlaceServiceAvailabilityListReducers';
import form from 'src/modules/businessPlaceServiceAvailability/form/businessPlaceServiceAvailabilityFormReducers';
import view from 'src/modules/businessPlaceServiceAvailability/view/businessPlaceServiceAvailabilityViewReducers';
import destroy from 'src/modules/businessPlaceServiceAvailability/destroy/businessPlaceServiceAvailabilityDestroyReducers';
import importerReducer from 'src/modules/businessPlaceServiceAvailability/importer/businessPlaceServiceAvailabilityImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
