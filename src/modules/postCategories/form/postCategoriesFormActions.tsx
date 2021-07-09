import PostCategoriesService from 'src/modules/postCategories/postCategoriesService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'POSTCATEGORIES_FORM';

const postCategoriesFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: postCategoriesFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await PostCategoriesService.find(id);
      }

      dispatch({
        type: postCategoriesFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: postCategoriesFormActions.INIT_ERROR,
      });

      getHistory().push('/post-categories');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: postCategoriesFormActions.CREATE_STARTED,
      });

      await PostCategoriesService.create(values);

      dispatch({
        type: postCategoriesFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.postCategories.create.success'),
      );

      getHistory().push('/post-categories');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: postCategoriesFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: postCategoriesFormActions.UPDATE_STARTED,
      });

      await PostCategoriesService.update(id, values);

      dispatch({
        type: postCategoriesFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.postCategories.update.success'),
      );

      getHistory().push('/post-categories');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: postCategoriesFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default postCategoriesFormActions;
