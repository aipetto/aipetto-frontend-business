import PetExaminationService from 'src/modules/petExamination/petExaminationService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PETEXAMINATION_VIEW';

const petExaminationViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: petExaminationViewActions.FIND_STARTED,
      });

      const record = await PetExaminationService.find(id);

      dispatch({
        type: petExaminationViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: petExaminationViewActions.FIND_ERROR,
      });

      getHistory().push('/pet-examination');
    }
  },
};

export default petExaminationViewActions;
