import listActions from 'src/modules/place/list/placeListActions';
import PlaceService from 'src/modules/place/placeService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PLACE_DESTROY';

const placeDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: placeDestroyActions.DESTROY_STARTED,
      });

      await PlaceService.destroyAll([id]);

      dispatch({
        type: placeDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.place.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/place');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: placeDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: placeDestroyActions.DESTROY_ALL_STARTED,
      });

      await PlaceService.destroyAll(ids);

      dispatch({
        type: placeDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.place.destroyAll.success'),
      );

      getHistory().push('/place');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: placeDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default placeDestroyActions;
