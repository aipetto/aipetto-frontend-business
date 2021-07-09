import PetPhotosService from 'src/modules/petPhotos/petPhotosService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PETPHOTOS_VIEW';

const petPhotosViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: petPhotosViewActions.FIND_STARTED,
      });

      const record = await PetPhotosService.find(id);

      dispatch({
        type: petPhotosViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: petPhotosViewActions.FIND_ERROR,
      });

      getHistory().push('/pet-photos');
    }
  },
};

export default petPhotosViewActions;
