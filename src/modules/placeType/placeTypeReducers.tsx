import list from 'src/modules/placeType/list/placeTypeListReducers';
import form from 'src/modules/placeType/form/placeTypeFormReducers';
import view from 'src/modules/placeType/view/placeTypeViewReducers';
import destroy from 'src/modules/placeType/destroy/placeTypeDestroyReducers';
import importerReducer from 'src/modules/placeType/importer/placeTypeImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
