import listActions from 'src/modules/placeType/list/placeTypeListActions';
import PlaceTypeService from 'src/modules/placeType/placeTypeService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PLACETYPE_DESTROY';

const placeTypeDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: placeTypeDestroyActions.DESTROY_STARTED,
      });

      await PlaceTypeService.destroyAll([id]);

      dispatch({
        type: placeTypeDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.placeType.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/place-type');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: placeTypeDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: placeTypeDestroyActions.DESTROY_ALL_STARTED,
      });

      await PlaceTypeService.destroyAll(ids);

      dispatch({
        type: placeTypeDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.placeType.destroyAll.success'),
      );

      getHistory().push('/place-type');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: placeTypeDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default placeTypeDestroyActions;
