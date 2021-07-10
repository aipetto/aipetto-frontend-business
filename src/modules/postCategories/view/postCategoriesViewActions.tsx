import PostCategoriesService from 'src/modules/postCategories/postCategoriesService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'POSTCATEGORIES_VIEW';

const postCategoriesViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: postCategoriesViewActions.FIND_STARTED,
      });

      const record = await PostCategoriesService.find(id);

      dispatch({
        type: postCategoriesViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: postCategoriesViewActions.FIND_ERROR,
      });

      getHistory().push('/post-categories');
    }
  },
};

export default postCategoriesViewActions;
