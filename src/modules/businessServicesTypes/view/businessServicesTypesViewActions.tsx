import BusinessServicesTypesService from 'src/modules/businessServicesTypes/businessServicesTypesService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'BUSINESSSERVICESTYPES_VIEW';

const businessServicesTypesViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: businessServicesTypesViewActions.FIND_STARTED,
      });

      const record = await BusinessServicesTypesService.find(id);

      dispatch({
        type: businessServicesTypesViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: businessServicesTypesViewActions.FIND_ERROR,
      });

      getHistory().push('/business-services-types');
    }
  },
};

export default businessServicesTypesViewActions;
