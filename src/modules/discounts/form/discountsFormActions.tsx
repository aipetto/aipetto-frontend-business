import DiscountsService from 'src/modules/discounts/discountsService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'DISCOUNTS_FORM';

const discountsFormActions = {
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
        type: discountsFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await DiscountsService.find(id);
      }

      dispatch({
        type: discountsFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: discountsFormActions.INIT_ERROR,
      });

      getHistory().push('/discounts');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: discountsFormActions.CREATE_STARTED,
      });

      await DiscountsService.create(values);

      dispatch({
        type: discountsFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.discounts.create.success'),
      );

      getHistory().push('/discounts');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: discountsFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: discountsFormActions.UPDATE_STARTED,
      });

      await DiscountsService.update(id, values);

      dispatch({
        type: discountsFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.discounts.update.success'),
      );

      getHistory().push('/discounts');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: discountsFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default discountsFormActions;
