import list from 'src/modules/petVaccines/list/petVaccinesListReducers';
import form from 'src/modules/petVaccines/form/petVaccinesFormReducers';
import view from 'src/modules/petVaccines/view/petVaccinesViewReducers';
import destroy from 'src/modules/petVaccines/destroy/petVaccinesDestroyReducers';
import importerReducer from 'src/modules/petVaccines/importer/petVaccinesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
