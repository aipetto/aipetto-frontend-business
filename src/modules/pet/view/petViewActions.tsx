import PetService from 'src/modules/pet/petService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PET_VIEW';

const petViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: petViewActions.FIND_STARTED,
      });

      const record = await PetService.find(id);

      dispatch({
        type: petViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: petViewActions.FIND_ERROR,
      });

      getHistory().push('/pet');
    }
  },
};

export default petViewActions;
