import PlaceTypeService from 'src/modules/placeType/placeTypeService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PLACETYPE_VIEW';

const placeTypeViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: placeTypeViewActions.FIND_STARTED,
      });

      const record = await PlaceTypeService.find(id);

      dispatch({
        type: placeTypeViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: placeTypeViewActions.FIND_ERROR,
      });

      getHistory().push('/place-type');
    }
  },
};

export default placeTypeViewActions;
