import list from 'src/modules/businessServicesPrices/list/businessServicesPricesListReducers';
import form from 'src/modules/businessServicesPrices/form/businessServicesPricesFormReducers';
import view from 'src/modules/businessServicesPrices/view/businessServicesPricesViewReducers';
import destroy from 'src/modules/businessServicesPrices/destroy/businessServicesPricesDestroyReducers';
import importerReducer from 'src/modules/businessServicesPrices/importer/businessServicesPricesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
