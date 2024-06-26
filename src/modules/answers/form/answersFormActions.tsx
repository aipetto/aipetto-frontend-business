import AnswersService from 'src/modules/answers/answersService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'ANSWERS_FORM';

const answersFormActions = {
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
        type: answersFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await AnswersService.find(id);
      }

      dispatch({
        type: answersFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: answersFormActions.INIT_ERROR,
      });

      getHistory().push('/answers');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: answersFormActions.CREATE_STARTED,
      });

      await AnswersService.create(values);

      dispatch({
        type: answersFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.answers.create.success'),
      );

      getHistory().push('/answers');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: answersFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: answersFormActions.UPDATE_STARTED,
      });

      await AnswersService.update(id, values);

      dispatch({
        type: answersFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.answers.update.success'),
      );

      getHistory().push('/answers');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: answersFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default answersFormActions;
