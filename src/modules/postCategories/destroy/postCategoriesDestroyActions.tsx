import listActions from 'src/modules/postCategories/list/postCategoriesListActions';
import PostCategoriesService from 'src/modules/postCategories/postCategoriesService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'POSTCATEGORIES_DESTROY';

const postCategoriesDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: postCategoriesDestroyActions.DESTROY_STARTED,
      });

      await PostCategoriesService.destroyAll([id]);

      dispatch({
        type: postCategoriesDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.postCategories.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/post-categories');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: postCategoriesDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: postCategoriesDestroyActions.DESTROY_ALL_STARTED,
      });

      await PostCategoriesService.destroyAll(ids);

      dispatch({
        type: postCategoriesDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.postCategories.destroyAll.success'),
      );

      getHistory().push('/post-categories');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: postCategoriesDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default postCategoriesDestroyActions;
