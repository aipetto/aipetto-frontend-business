import NewBusinessSurveyService from 'src/modules/newBusinessSurvey/newBusinessSurveyService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'NEWBUSINESSSURVEY_FORM';

const newBusinessSurveyFormActions = {
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
        type: newBusinessSurveyFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await NewBusinessSurveyService.find(id);
      }

      dispatch({
        type: newBusinessSurveyFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: newBusinessSurveyFormActions.INIT_ERROR,
      });

      getHistory().push('/new-business-survey');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: newBusinessSurveyFormActions.CREATE_STARTED,
      });

      await NewBusinessSurveyService.create(values);

      dispatch({
        type: newBusinessSurveyFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.newBusinessSurvey.create.success'),
      );

      getHistory().push('/new-business-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: newBusinessSurveyFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: newBusinessSurveyFormActions.UPDATE_STARTED,
      });

      await NewBusinessSurveyService.update(id, values);

      dispatch({
        type: newBusinessSurveyFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.newBusinessSurvey.update.success'),
      );

      getHistory().push('/new-business-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: newBusinessSurveyFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default newBusinessSurveyFormActions;
