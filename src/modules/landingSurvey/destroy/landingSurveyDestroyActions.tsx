import listActions from 'src/modules/landingSurvey/list/landingSurveyListActions';
import LandingSurveyService from 'src/modules/landingSurvey/landingSurveyService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'LANDINGSURVEY_DESTROY';

const landingSurveyDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: landingSurveyDestroyActions.DESTROY_STARTED,
      });

      await LandingSurveyService.destroyAll([id]);

      dispatch({
        type: landingSurveyDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.landingSurvey.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/landing-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: landingSurveyDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: landingSurveyDestroyActions.DESTROY_ALL_STARTED,
      });

      await LandingSurveyService.destroyAll(ids);

      dispatch({
        type: landingSurveyDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.landingSurvey.destroyAll.success'),
      );

      getHistory().push('/landing-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: landingSurveyDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default landingSurveyDestroyActions;
