import listActions from 'src/modules/pointsChallenges/list/pointsChallengesListActions';
import PointsChallengesService from 'src/modules/pointsChallenges/pointsChallengesService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'POINTSCHALLENGES_DESTROY';

const pointsChallengesDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: pointsChallengesDestroyActions.DESTROY_STARTED,
      });

      await PointsChallengesService.destroyAll([id]);

      dispatch({
        type: pointsChallengesDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.pointsChallenges.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/points-challenges');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: pointsChallengesDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: pointsChallengesDestroyActions.DESTROY_ALL_STARTED,
      });

      await PointsChallengesService.destroyAll(ids);

      dispatch({
        type: pointsChallengesDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.pointsChallenges.destroyAll.success'),
      );

      getHistory().push('/points-challenges');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: pointsChallengesDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default pointsChallengesDestroyActions;
