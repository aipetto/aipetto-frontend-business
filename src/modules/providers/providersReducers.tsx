import list from 'src/modules/providers/list/providersListReducers';
import form from 'src/modules/providers/form/providersFormReducers';
import view from 'src/modules/providers/view/providersViewReducers';
import destroy from 'src/modules/providers/destroy/providersDestroyReducers';
import importerReducer from 'src/modules/providers/importer/providersImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
