import listActions from 'src/modules/breed/list/breedListActions';
import BreedService from 'src/modules/breed/breedService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'BREED_DESTROY';

const breedDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: breedDestroyActions.DESTROY_STARTED,
      });

      await BreedService.destroyAll([id]);

      dispatch({
        type: breedDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.breed.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/breed');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: breedDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: breedDestroyActions.DESTROY_ALL_STARTED,
      });

      await BreedService.destroyAll(ids);

      dispatch({
        type: breedDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.breed.destroyAll.success'),
      );

      getHistory().push('/breed');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: breedDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default breedDestroyActions;
