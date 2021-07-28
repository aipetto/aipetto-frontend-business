import listActions from 'src/modules/businessPaymentCycle/list/businessPaymentCycleListActions';
import BusinessPaymentCycleService from 'src/modules/businessPaymentCycle/businessPaymentCycleService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'BUSINESSPAYMENTCYCLE_DESTROY';

const businessPaymentCycleDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: businessPaymentCycleDestroyActions.DESTROY_STARTED,
      });

      await BusinessPaymentCycleService.destroyAll([id]);

      dispatch({
        type: businessPaymentCycleDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.businessPaymentCycle.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/business-payment-cycle');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: businessPaymentCycleDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: businessPaymentCycleDestroyActions.DESTROY_ALL_STARTED,
      });

      await BusinessPaymentCycleService.destroyAll(ids);

      dispatch({
        type: businessPaymentCycleDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.businessPaymentCycle.destroyAll.success'),
      );

      getHistory().push('/business-payment-cycle');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: businessPaymentCycleDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default businessPaymentCycleDestroyActions;
