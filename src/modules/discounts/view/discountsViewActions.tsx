import DiscountsService from 'src/modules/discounts/discountsService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DISCOUNTS_VIEW';

const discountsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: discountsViewActions.FIND_STARTED,
      });

      const record = await DiscountsService.find(id);

      dispatch({
        type: discountsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: discountsViewActions.FIND_ERROR,
      });

      getHistory().push('/discounts');
    }
  },
};

export default discountsViewActions;
