import list from 'src/modules/reservationAgenda/list/reservationAgendaListReducers';
import form from 'src/modules/reservationAgenda/form/reservationAgendaFormReducers';
import view from 'src/modules/reservationAgenda/view/reservationAgendaViewReducers';
import destroy from 'src/modules/reservationAgenda/destroy/reservationAgendaDestroyReducers';
import importerReducer from 'src/modules/reservationAgenda/importer/reservationAgendaImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
