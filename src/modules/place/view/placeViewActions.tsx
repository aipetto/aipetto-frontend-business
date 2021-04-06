import PlaceService from 'src/modules/place/placeService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PLACE_VIEW';

const placeViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: placeViewActions.FIND_STARTED,
      });

      const record = await PlaceService.find(id);

      dispatch({
        type: placeViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: placeViewActions.FIND_ERROR,
      });

      getHistory().push('/place');
    }
  },
};

export default placeViewActions;
