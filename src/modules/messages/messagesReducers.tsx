import list from 'src/modules/messages/list/messagesListReducers';
import form from 'src/modules/messages/form/messagesFormReducers';
import view from 'src/modules/messages/view/messagesViewReducers';
import destroy from 'src/modules/messages/destroy/messagesDestroyReducers';
import importerReducer from 'src/modules/messages/importer/messagesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
