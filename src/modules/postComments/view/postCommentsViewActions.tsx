import PostCommentsService from 'src/modules/postComments/postCommentsService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'POSTCOMMENTS_VIEW';

const postCommentsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: postCommentsViewActions.FIND_STARTED,
      });

      const record = await PostCommentsService.find(id);

      dispatch({
        type: postCommentsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: postCommentsViewActions.FIND_ERROR,
      });

      getHistory().push('/post-comments');
    }
  },
};

export default postCommentsViewActions;
