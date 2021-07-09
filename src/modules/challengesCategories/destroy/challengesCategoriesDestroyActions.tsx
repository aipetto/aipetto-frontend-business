import listActions from 'src/modules/challengesCategories/list/challengesCategoriesListActions';
import ChallengesCategoriesService from 'src/modules/challengesCategories/challengesCategoriesService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'CHALLENGESCATEGORIES_DESTROY';

const challengesCategoriesDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: challengesCategoriesDestroyActions.DESTROY_STARTED,
      });

      await ChallengesCategoriesService.destroyAll([id]);

      dispatch({
        type: challengesCategoriesDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.challengesCategories.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/challenges-categories');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: challengesCategoriesDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: challengesCategoriesDestroyActions.DESTROY_ALL_STARTED,
      });

      await ChallengesCategoriesService.destroyAll(ids);

      dispatch({
        type: challengesCategoriesDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.challengesCategories.destroyAll.success'),
      );

      getHistory().push('/challenges-categories');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: challengesCategoriesDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default challengesCategoriesDestroyActions;
