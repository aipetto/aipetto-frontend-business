import ChallengesCategoriesService from 'src/modules/challengesCategories/challengesCategoriesService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'CHALLENGESCATEGORIES_FORM';

const challengesCategoriesFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: challengesCategoriesFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ChallengesCategoriesService.find(id);
      }

      dispatch({
        type: challengesCategoriesFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: challengesCategoriesFormActions.INIT_ERROR,
      });

      getHistory().push('/challenges-categories');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: challengesCategoriesFormActions.CREATE_STARTED,
      });

      await ChallengesCategoriesService.create(values);

      dispatch({
        type: challengesCategoriesFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.challengesCategories.create.success'),
      );

      getHistory().push('/challenges-categories');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: challengesCategoriesFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: challengesCategoriesFormActions.UPDATE_STARTED,
      });

      await ChallengesCategoriesService.update(id, values);

      dispatch({
        type: challengesCategoriesFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.challengesCategories.update.success'),
      );

      getHistory().push('/challenges-categories');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: challengesCategoriesFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default challengesCategoriesFormActions;
