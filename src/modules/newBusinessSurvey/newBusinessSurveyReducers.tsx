import list from 'src/modules/newBusinessSurvey/list/newBusinessSurveyListReducers';
import form from 'src/modules/newBusinessSurvey/form/newBusinessSurveyFormReducers';
import view from 'src/modules/newBusinessSurvey/view/newBusinessSurveyViewReducers';
import destroy from 'src/modules/newBusinessSurvey/destroy/newBusinessSurveyDestroyReducers';
import importerReducer from 'src/modules/newBusinessSurvey/importer/newBusinessSurveyImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
