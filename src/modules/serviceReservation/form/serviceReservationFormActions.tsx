import ServiceReservationService from 'src/modules/serviceReservation/serviceReservationService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'SERVICERESERVATION_FORM';

const serviceReservationFormActions = {
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
        type: serviceReservationFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ServiceReservationService.find(id);
      }

      dispatch({
        type: serviceReservationFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: serviceReservationFormActions.INIT_ERROR,
      });

      getHistory().push('/service-reservation');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: serviceReservationFormActions.CREATE_STARTED,
      });

      await ServiceReservationService.create(values);

      dispatch({
        type: serviceReservationFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.serviceReservation.create.success'),
      );

      getHistory().push('/service-reservation');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: serviceReservationFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: serviceReservationFormActions.UPDATE_STARTED,
      });

      await ServiceReservationService.update(id, values);

      dispatch({
        type: serviceReservationFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.serviceReservation.update.success'),
      );

      getHistory().push('/service-reservation');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: serviceReservationFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default serviceReservationFormActions;
