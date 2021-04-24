import MessagesService from 'src/modules/messages/messagesService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'MESSAGES_VIEW';

const messagesViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: messagesViewActions.FIND_STARTED,
      });

      const record = await MessagesService.find(id);

      dispatch({
        type: messagesViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: messagesViewActions.FIND_ERROR,
      });

      getHistory().push('/messages');
    }
  },
};

export default messagesViewActions;
