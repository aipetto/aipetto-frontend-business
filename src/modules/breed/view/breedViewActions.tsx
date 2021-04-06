import BreedService from 'src/modules/breed/breedService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'BREED_VIEW';

const breedViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: breedViewActions.FIND_STARTED,
      });

      const record = await BreedService.find(id);

      dispatch({
        type: breedViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: breedViewActions.FIND_ERROR,
      });

      getHistory().push('/breed');
    }
  },
};

export default breedViewActions;
