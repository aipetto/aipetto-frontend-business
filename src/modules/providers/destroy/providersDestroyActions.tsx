import listActions from 'src/modules/providers/list/providersListActions';
import ProvidersService from 'src/modules/providers/providersService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PROVIDERS_DESTROY';

const providersDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: providersDestroyActions.DESTROY_STARTED,
      });

      await ProvidersService.destroyAll([id]);

      dispatch({
        type: providersDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.providers.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/providers');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: providersDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: providersDestroyActions.DESTROY_ALL_STARTED,
      });

      await ProvidersService.destroyAll(ids);

      dispatch({
        type: providersDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.providers.destroyAll.success'),
      );

      getHistory().push('/providers');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: providersDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default providersDestroyActions;
