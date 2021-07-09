import BusinessServicesPricesService from 'src/modules/businessServicesPrices/businessServicesPricesService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'BUSINESSSERVICESPRICES_VIEW';

const businessServicesPricesViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: businessServicesPricesViewActions.FIND_STARTED,
      });

      const record = await BusinessServicesPricesService.find(id);

      dispatch({
        type: businessServicesPricesViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: businessServicesPricesViewActions.FIND_ERROR,
      });

      getHistory().push('/business-services-prices');
    }
  },
};

export default businessServicesPricesViewActions;
