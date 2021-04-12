import ReservationAgendaService from 'src/modules/reservationAgenda/reservationAgendaService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'RESERVATIONAGENDA_FORM';

const reservationAgendaFormActions = {
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
        type: reservationAgendaFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ReservationAgendaService.find(id);
      }

      dispatch({
        type: reservationAgendaFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: reservationAgendaFormActions.INIT_ERROR,
      });

      getHistory().push('/reservation-agenda');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: reservationAgendaFormActions.CREATE_STARTED,
      });

      await ReservationAgendaService.create(values);

      dispatch({
        type: reservationAgendaFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.reservationAgenda.create.success'),
      );

      getHistory().push('/reservation-agenda');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: reservationAgendaFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: reservationAgendaFormActions.UPDATE_STARTED,
      });

      await ReservationAgendaService.update(id, values);

      dispatch({
        type: reservationAgendaFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.reservationAgenda.update.success'),
      );

      getHistory().push('/reservation-agenda');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: reservationAgendaFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default reservationAgendaFormActions;
