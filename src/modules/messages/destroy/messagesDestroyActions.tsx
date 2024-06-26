import listActions from 'src/modules/messages/list/messagesListActions';
import MessagesService from 'src/modules/messages/messagesService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'MESSAGES_DESTROY';

const messagesDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: messagesDestroyActions.DESTROY_STARTED,
      });

      await MessagesService.destroyAll([id]);

      dispatch({
        type: messagesDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.messages.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/messages');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: messagesDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: messagesDestroyActions.DESTROY_ALL_STARTED,
      });

      await MessagesService.destroyAll(ids);

      dispatch({
        type: messagesDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.messages.destroyAll.success'),
      );

      getHistory().push('/messages');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: messagesDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default messagesDestroyActions;
