import VaccineTypesService from 'src/modules/vaccineTypes/vaccineTypesService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'VACCINETYPES_VIEW';

const vaccineTypesViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: vaccineTypesViewActions.FIND_STARTED,
      });

      const record = await VaccineTypesService.find(id);

      dispatch({
        type: vaccineTypesViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: vaccineTypesViewActions.FIND_ERROR,
      });

      getHistory().push('/vaccine-types');
    }
  },
};

export default vaccineTypesViewActions;
