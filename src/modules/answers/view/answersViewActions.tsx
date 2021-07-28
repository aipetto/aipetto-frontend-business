import AnswersService from 'src/modules/answers/answersService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ANSWERS_VIEW';

const answersViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: answersViewActions.FIND_STARTED,
      });

      const record = await AnswersService.find(id);

      dispatch({
        type: answersViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: answersViewActions.FIND_ERROR,
      });

      getHistory().push('/answers');
    }
  },
};

export default answersViewActions;
