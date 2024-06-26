import listActions from 'src/modules/pet/list/petListActions';
import PetService from 'src/modules/pet/petService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PET_DESTROY';

const petDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: petDestroyActions.DESTROY_STARTED,
      });

      await PetService.destroyAll([id]);

      dispatch({
        type: petDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.pet.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/pet');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: petDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: petDestroyActions.DESTROY_ALL_STARTED,
      });

      await PetService.destroyAll(ids);

      dispatch({
        type: petDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.pet.destroyAll.success'),
      );

      getHistory().push('/pet');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: petDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default petDestroyActions;
