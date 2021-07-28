import BusinessPaymentCycleService from 'src/modules/businessPaymentCycle/businessPaymentCycleService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'BUSINESSPAYMENTCYCLE_VIEW';

const businessPaymentCycleViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: businessPaymentCycleViewActions.FIND_STARTED,
      });

      const record = await BusinessPaymentCycleService.find(id);

      dispatch({
        type: businessPaymentCycleViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: businessPaymentCycleViewActions.FIND_ERROR,
      });

      getHistory().push('/business-payment-cycle');
    }
  },
};

export default businessPaymentCycleViewActions;
