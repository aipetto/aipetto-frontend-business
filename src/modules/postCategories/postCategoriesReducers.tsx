import list from 'src/modules/postCategories/list/postCategoriesListReducers';
import form from 'src/modules/postCategories/form/postCategoriesFormReducers';
import view from 'src/modules/postCategories/view/postCategoriesViewReducers';
import destroy from 'src/modules/postCategories/destroy/postCategoriesDestroyReducers';
import importerReducer from 'src/modules/postCategories/importer/postCategoriesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
