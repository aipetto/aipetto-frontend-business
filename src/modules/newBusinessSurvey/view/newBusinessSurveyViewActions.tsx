import NewBusinessSurveyService from 'src/modules/newBusinessSurvey/newBusinessSurveyService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'NEWBUSINESSSURVEY_VIEW';

const newBusinessSurveyViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: newBusinessSurveyViewActions.FIND_STARTED,
      });

      const record = await NewBusinessSurveyService.find(id);

      dispatch({
        type: newBusinessSurveyViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: newBusinessSurveyViewActions.FIND_ERROR,
      });

      getHistory().push('/new-business-survey');
    }
  },
};

export default newBusinessSurveyViewActions;
