import listActions from 'src/modules/reservationAgenda/list/reservationAgendaListActions';
import ReservationAgendaService from 'src/modules/reservationAgenda/reservationAgendaService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'RESERVATIONAGENDA_DESTROY';

const reservationAgendaDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: reservationAgendaDestroyActions.DESTROY_STARTED,
      });

      await ReservationAgendaService.destroyAll([id]);

      dispatch({
        type: reservationAgendaDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.reservationAgenda.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/reservation-agenda');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: reservationAgendaDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: reservationAgendaDestroyActions.DESTROY_ALL_STARTED,
      });

      await ReservationAgendaService.destroyAll(ids);

      dispatch({
        type: reservationAgendaDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.reservationAgenda.destroyAll.success'),
      );

      getHistory().push('/reservation-agenda');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: reservationAgendaDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default reservationAgendaDestroyActions;
