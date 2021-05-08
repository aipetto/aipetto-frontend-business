import list from 'src/modules/discounts/list/discountsListReducers';
import form from 'src/modules/discounts/form/discountsFormReducers';
import view from 'src/modules/discounts/view/discountsViewReducers';
import destroy from 'src/modules/discounts/destroy/discountsDestroyReducers';
import importerReducer from 'src/modules/discounts/importer/discountsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
