import PointsChallengesService from 'src/modules/pointsChallenges/pointsChallengesService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'POINTSCHALLENGES_VIEW';

const pointsChallengesViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: pointsChallengesViewActions.FIND_STARTED,
      });

      const record = await PointsChallengesService.find(id);

      dispatch({
        type: pointsChallengesViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: pointsChallengesViewActions.FIND_ERROR,
      });

      getHistory().push('/points-challenges');
    }
  },
};

export default pointsChallengesViewActions;
