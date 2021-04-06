import list from 'src/modules/place/list/placeListReducers';
import form from 'src/modules/place/form/placeFormReducers';
import view from 'src/modules/place/view/placeViewReducers';
import destroy from 'src/modules/place/destroy/placeDestroyReducers';
import importerReducer from 'src/modules/place/importer/placeImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
