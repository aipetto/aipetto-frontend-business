import ServiceReservationService from 'src/modules/serviceReservation/serviceReservationService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SERVICERESERVATION_VIEW';

const serviceReservationViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: serviceReservationViewActions.FIND_STARTED,
      });

      const record = await ServiceReservationService.find(id);

      dispatch({
        type: serviceReservationViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: serviceReservationViewActions.FIND_ERROR,
      });

      getHistory().push('/service-reservation');
    }
  },
};

export default serviceReservationViewActions;
