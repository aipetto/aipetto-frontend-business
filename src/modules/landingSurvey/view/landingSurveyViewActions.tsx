import LandingSurveyService from 'src/modules/landingSurvey/landingSurveyService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'LANDINGSURVEY_VIEW';

const landingSurveyViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: landingSurveyViewActions.FIND_STARTED,
      });

      const record = await LandingSurveyService.find(id);

      dispatch({
        type: landingSurveyViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: landingSurveyViewActions.FIND_ERROR,
      });

      getHistory().push('/landing-survey');
    }
  },
};

export default landingSurveyViewActions;
