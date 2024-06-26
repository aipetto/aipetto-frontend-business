import listActions from 'src/modules/petVaccines/list/petVaccinesListActions';
import PetVaccinesService from 'src/modules/petVaccines/petVaccinesService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PETVACCINES_DESTROY';

const petVaccinesDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: petVaccinesDestroyActions.DESTROY_STARTED,
      });

      await PetVaccinesService.destroyAll([id]);

      dispatch({
        type: petVaccinesDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.petVaccines.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/pet-vaccines');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: petVaccinesDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: petVaccinesDestroyActions.DESTROY_ALL_STARTED,
      });

      await PetVaccinesService.destroyAll(ids);

      dispatch({
        type: petVaccinesDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.petVaccines.destroyAll.success'),
      );

      getHistory().push('/pet-vaccines');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: petVaccinesDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default petVaccinesDestroyActions;
