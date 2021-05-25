import list from 'src/modules/landingSurvey/list/landingSurveyListReducers';
import form from 'src/modules/landingSurvey/form/landingSurveyFormReducers';
import view from 'src/modules/landingSurvey/view/landingSurveyViewReducers';
import destroy from 'src/modules/landingSurvey/destroy/landingSurveyDestroyReducers';
import importerReducer from 'src/modules/landingSurvey/importer/landingSurveyImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
