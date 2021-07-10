import list from 'src/modules/petDiseases/list/petDiseasesListReducers';
import form from 'src/modules/petDiseases/form/petDiseasesFormReducers';
import view from 'src/modules/petDiseases/view/petDiseasesViewReducers';
import destroy from 'src/modules/petDiseases/destroy/petDiseasesDestroyReducers';
import importerReducer from 'src/modules/petDiseases/importer/petDiseasesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
