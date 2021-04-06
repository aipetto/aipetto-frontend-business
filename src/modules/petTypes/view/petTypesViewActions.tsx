import PetTypesService from 'src/modules/petTypes/petTypesService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PETTYPES_VIEW';

const petTypesViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: petTypesViewActions.FIND_STARTED,
      });

      const record = await PetTypesService.find(id);

      dispatch({
        type: petTypesViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: petTypesViewActions.FIND_ERROR,
      });

      getHistory().push('/pet-types');
    }
  },
};

export default petTypesViewActions;
