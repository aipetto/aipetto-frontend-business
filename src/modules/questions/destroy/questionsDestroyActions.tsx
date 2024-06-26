import listActions from 'src/modules/questions/list/questionsListActions';
import QuestionsService from 'src/modules/questions/questionsService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'QUESTIONS_DESTROY';

const questionsDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: questionsDestroyActions.DESTROY_STARTED,
      });

      await QuestionsService.destroyAll([id]);

      dispatch({
        type: questionsDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.questions.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/questions');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: questionsDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: questionsDestroyActions.DESTROY_ALL_STARTED,
      });

      await QuestionsService.destroyAll(ids);

      dispatch({
        type: questionsDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.questions.destroyAll.success'),
      );

      getHistory().push('/questions');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: questionsDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default questionsDestroyActions;
