import list from 'src/modules/pointsChallenges/list/pointsChallengesListReducers';
import form from 'src/modules/pointsChallenges/form/pointsChallengesFormReducers';
import view from 'src/modules/pointsChallenges/view/pointsChallengesViewReducers';
import destroy from 'src/modules/pointsChallenges/destroy/pointsChallengesDestroyReducers';
import importerReducer from 'src/modules/pointsChallenges/importer/pointsChallengesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
