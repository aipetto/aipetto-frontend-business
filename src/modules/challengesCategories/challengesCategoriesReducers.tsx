import list from 'src/modules/challengesCategories/list/challengesCategoriesListReducers';
import form from 'src/modules/challengesCategories/form/challengesCategoriesFormReducers';
import view from 'src/modules/challengesCategories/view/challengesCategoriesViewReducers';
import destroy from 'src/modules/challengesCategories/destroy/challengesCategoriesDestroyReducers';
import importerReducer from 'src/modules/challengesCategories/importer/challengesCategoriesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
