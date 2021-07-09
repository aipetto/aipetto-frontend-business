import PetDiseasesService from 'src/modules/petDiseases/petDiseasesService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PETDISEASES_VIEW';

const petDiseasesViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: petDiseasesViewActions.FIND_STARTED,
      });

      const record = await PetDiseasesService.find(id);

      dispatch({
        type: petDiseasesViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: petDiseasesViewActions.FIND_ERROR,
      });

      getHistory().push('/pet-diseases');
    }
  },
};

export default petDiseasesViewActions;
