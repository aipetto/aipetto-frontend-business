import BusinessPlaceServiceAvailabilityService from 'src/modules/businessPlaceServiceAvailability/businessPlaceServiceAvailabilityService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'BUSINESSPLACESERVICEAVAILABILITY_VIEW';

const businessPlaceServiceAvailabilityViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: businessPlaceServiceAvailabilityViewActions.FIND_STARTED,
      });

      const record = await BusinessPlaceServiceAvailabilityService.find(id);

      dispatch({
        type: businessPlaceServiceAvailabilityViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: businessPlaceServiceAvailabilityViewActions.FIND_ERROR,
      });

      getHistory().push('/business-place-service-availability');
    }
  },
};

export default businessPlaceServiceAvailabilityViewActions;
