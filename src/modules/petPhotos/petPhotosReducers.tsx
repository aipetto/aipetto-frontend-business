import list from 'src/modules/petPhotos/list/petPhotosListReducers';
import form from 'src/modules/petPhotos/form/petPhotosFormReducers';
import view from 'src/modules/petPhotos/view/petPhotosViewReducers';
import destroy from 'src/modules/petPhotos/destroy/petPhotosDestroyReducers';
import importerReducer from 'src/modules/petPhotos/importer/petPhotosImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
