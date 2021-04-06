import BusinessServicesTypesService from 'src/modules/businessServicesTypes/businessServicesTypesService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'BUSINESSSERVICESTYPES_FORM';

const businessServicesTypesFormActions = {
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
        type: businessServicesTypesFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await BusinessServicesTypesService.find(id);
      }

      dispatch({
        type: businessServicesTypesFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: businessServicesTypesFormActions.INIT_ERROR,
      });

      getHistory().push('/business-services-types');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: businessServicesTypesFormActions.CREATE_STARTED,
      });

      await BusinessServicesTypesService.create(values);

      dispatch({
        type: businessServicesTypesFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.businessServicesTypes.create.success'),
      );

      getHistory().push('/business-services-types');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: businessServicesTypesFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: businessServicesTypesFormActions.UPDATE_STARTED,
      });

      await BusinessServicesTypesService.update(id, values);

      dispatch({
        type: businessServicesTypesFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.businessServicesTypes.update.success'),
      );

      getHistory().push('/business-services-types');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: businessServicesTypesFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default businessServicesTypesFormActions;
