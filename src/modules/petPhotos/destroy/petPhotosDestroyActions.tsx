import listActions from 'src/modules/petPhotos/list/petPhotosListActions';
import PetPhotosService from 'src/modules/petPhotos/petPhotosService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PETPHOTOS_DESTROY';

const petPhotosDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: petPhotosDestroyActions.DESTROY_STARTED,
      });

      await PetPhotosService.destroyAll([id]);

      dispatch({
        type: petPhotosDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.petPhotos.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/pet-photos');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: petPhotosDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: petPhotosDestroyActions.DESTROY_ALL_STARTED,
      });

      await PetPhotosService.destroyAll(ids);

      dispatch({
        type: petPhotosDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.petPhotos.destroyAll.success'),
      );

      getHistory().push('/pet-photos');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: petPhotosDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default petPhotosDestroyActions;
