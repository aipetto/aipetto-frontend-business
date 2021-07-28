import QuestionsService from 'src/modules/questions/questionsService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'QUESTIONS_VIEW';

const questionsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: questionsViewActions.FIND_STARTED,
      });

      const record = await QuestionsService.find(id);

      dispatch({
        type: questionsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: questionsViewActions.FIND_ERROR,
      });

      getHistory().push('/questions');
    }
  },
};

export default questionsViewActions;
