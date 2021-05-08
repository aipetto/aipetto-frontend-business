import ProvidersService from 'src/modules/providers/providersService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PROVIDERS_VIEW';

const providersViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: providersViewActions.FIND_STARTED,
      });

      const record = await ProvidersService.find(id);

      dispatch({
        type: providersViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: providersViewActions.FIND_ERROR,
      });

      getHistory().push('/providers');
    }
  },
};

export default providersViewActions;
