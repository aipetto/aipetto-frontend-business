import ReservationAgendaService from 'src/modules/reservationAgenda/reservationAgendaService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'RESERVATIONAGENDA_VIEW';

const reservationAgendaViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: reservationAgendaViewActions.FIND_STARTED,
      });

      const record = await ReservationAgendaService.find(id);

      dispatch({
        type: reservationAgendaViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: reservationAgendaViewActions.FIND_ERROR,
      });

      getHistory().push('/reservation-agenda');
    }
  },
};

export default reservationAgendaViewActions;
