import BusinessServicesPricesService from 'src/modules/businessServicesPrices/businessServicesPricesService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'BUSINESSSERVICESPRICES_FORM';

const businessServicesPricesFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: businessServicesPricesFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await BusinessServicesPricesService.find(id);
      }

      dispatch({
        type: businessServicesPricesFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: businessServicesPricesFormActions.INIT_ERROR,
      });

      getHistory().push('/business-services-prices');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: businessServicesPricesFormActions.CREATE_STARTED,
      });

      await BusinessServicesPricesService.create(values);

      dispatch({
        type: businessServicesPricesFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.businessServicesPrices.create.success'),
      );

      getHistory().push('/business-services-prices');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: businessServicesPricesFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: businessServicesPricesFormActions.UPDATE_STARTED,
      });

      await BusinessServicesPricesService.update(id, values);

      dispatch({
        type: businessServicesPricesFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.businessServicesPrices.update.success'),
      );

      getHistory().push('/business-services-prices');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: businessServicesPricesFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default businessServicesPricesFormActions;
