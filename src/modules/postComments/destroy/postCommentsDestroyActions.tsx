import listActions from 'src/modules/postComments/list/postCommentsListActions';
import PostCommentsService from 'src/modules/postComments/postCommentsService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'POSTCOMMENTS_DESTROY';

const postCommentsDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: postCommentsDestroyActions.DESTROY_STARTED,
      });

      await PostCommentsService.destroyAll([id]);

      dispatch({
        type: postCommentsDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.postComments.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/post-comments');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: postCommentsDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: postCommentsDestroyActions.DESTROY_ALL_STARTED,
      });

      await PostCommentsService.destroyAll(ids);

      dispatch({
        type: postCommentsDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.postComments.destroyAll.success'),
      );

      getHistory().push('/post-comments');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: postCommentsDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default postCommentsDestroyActions;
