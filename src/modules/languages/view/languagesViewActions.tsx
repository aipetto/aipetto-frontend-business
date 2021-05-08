import LanguagesService from 'src/modules/languages/languagesService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'LANGUAGES_VIEW';

const languagesViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: languagesViewActions.FIND_STARTED,
      });

      const record = await LanguagesService.find(id);

      dispatch({
        type: languagesViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: languagesViewActions.FIND_ERROR,
      });

      getHistory().push('/languages');
    }
  },
};

export default languagesViewActions;
