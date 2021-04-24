import ProfessionalsServiceAvailabilityService from 'src/modules/professionalsServiceAvailability/professionalsServiceAvailabilityService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PROFESSIONALSSERVICEAVAILABILITY_VIEW';

const professionalsServiceAvailabilityViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: professionalsServiceAvailabilityViewActions.FIND_STARTED,
      });

      const record = await ProfessionalsServiceAvailabilityService.find(id);

      dispatch({
        type: professionalsServiceAvailabilityViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: professionalsServiceAvailabilityViewActions.FIND_ERROR,
      });

      getHistory().push('/professionals-service-availability');
    }
  },
};

export default professionalsServiceAvailabilityViewActions;
