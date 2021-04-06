import listActions from 'src/modules/petTypes/list/petTypesListActions';
import PetTypesService from 'src/modules/petTypes/petTypesService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PETTYPES_DESTROY';

const petTypesDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: petTypesDestroyActions.DESTROY_STARTED,
      });

      await PetTypesService.destroyAll([id]);

      dispatch({
        type: petTypesDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.petTypes.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/pet-types');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: petTypesDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: petTypesDestroyActions.DESTROY_ALL_STARTED,
      });

      await PetTypesService.destroyAll(ids);

      dispatch({
        type: petTypesDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.petTypes.destroyAll.success'),
      );

      getHistory().push('/pet-types');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: petTypesDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default petTypesDestroyActions;
