import list from 'src/modules/businessPaymentCycle/list/businessPaymentCycleListReducers';
import form from 'src/modules/businessPaymentCycle/form/businessPaymentCycleFormReducers';
import view from 'src/modules/businessPaymentCycle/view/businessPaymentCycleViewReducers';
import destroy from 'src/modules/businessPaymentCycle/destroy/businessPaymentCycleDestroyReducers';
import importerReducer from 'src/modules/businessPaymentCycle/importer/businessPaymentCycleImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
