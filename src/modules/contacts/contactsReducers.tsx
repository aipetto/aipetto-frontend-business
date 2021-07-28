import list from 'src/modules/contacts/list/contactsListReducers';
import form from 'src/modules/contacts/form/contactsFormReducers';
import view from 'src/modules/contacts/view/contactsViewReducers';
import destroy from 'src/modules/contacts/destroy/contactsDestroyReducers';
import importerReducer from 'src/modules/contacts/importer/contactsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
