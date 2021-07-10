import ChallengesCategoriesService from 'src/modules/challengesCategories/challengesCategoriesService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'CHALLENGESCATEGORIES_VIEW';

const challengesCategoriesViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: challengesCategoriesViewActions.FIND_STARTED,
      });

      const record = await ChallengesCategoriesService.find(id);

      dispatch({
        type: challengesCategoriesViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: challengesCategoriesViewActions.FIND_ERROR,
      });

      getHistory().push('/challenges-categories');
    }
  },
};

export default challengesCategoriesViewActions;
