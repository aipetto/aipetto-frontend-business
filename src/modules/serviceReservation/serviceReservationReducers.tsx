import list from 'src/modules/serviceReservation/list/serviceReservationListReducers';
import form from 'src/modules/serviceReservation/form/serviceReservationFormReducers';
import view from 'src/modules/serviceReservation/view/serviceReservationViewReducers';
import destroy from 'src/modules/serviceReservation/destroy/serviceReservationDestroyReducers';
import importerReducer from 'src/modules/serviceReservation/importer/serviceReservationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  // TODO add reducer calendar,
  // TODO add reducer reminders,
  view,
  destroy,
  importer: importerReducer,
});
