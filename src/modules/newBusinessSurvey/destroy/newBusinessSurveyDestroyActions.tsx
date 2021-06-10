import listActions from 'src/modules/newBusinessSurvey/list/newBusinessSurveyListActions';
import NewBusinessSurveyService from 'src/modules/newBusinessSurvey/newBusinessSurveyService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'NEWBUSINESSSURVEY_DESTROY';

const newBusinessSurveyDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: newBusinessSurveyDestroyActions.DESTROY_STARTED,
      });

      await NewBusinessSurveyService.destroyAll([id]);

      dispatch({
        type: newBusinessSurveyDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.newBusinessSurvey.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/new-business-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: newBusinessSurveyDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: newBusinessSurveyDestroyActions.DESTROY_ALL_STARTED,
      });

      await NewBusinessSurveyService.destroyAll(ids);

      dispatch({
        type: newBusinessSurveyDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.newBusinessSurvey.destroyAll.success'),
      );

      getHistory().push('/new-business-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: newBusinessSurveyDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default newBusinessSurveyDestroyActions;
