import list from 'src/modules/petExamination/list/petExaminationListReducers';
import form from 'src/modules/petExamination/form/petExaminationFormReducers';
import view from 'src/modules/petExamination/view/petExaminationViewReducers';
import destroy from 'src/modules/petExamination/destroy/petExaminationDestroyReducers';
import importerReducer from 'src/modules/petExamination/importer/petExaminationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
