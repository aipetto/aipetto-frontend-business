import list from 'src/modules/breed/list/breedListReducers';
import form from 'src/modules/breed/form/breedFormReducers';
import view from 'src/modules/breed/view/breedViewReducers';
import destroy from 'src/modules/breed/destroy/breedDestroyReducers';
import importerReducer from 'src/modules/breed/importer/breedImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
