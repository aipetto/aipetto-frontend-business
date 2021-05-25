import LandingSurveyService from 'src/modules/landingSurvey/landingSurveyService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'LANDINGSURVEY_FORM';

const landingSurveyFormActions = {
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
        type: landingSurveyFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await LandingSurveyService.find(id);
      }

      dispatch({
        type: landingSurveyFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: landingSurveyFormActions.INIT_ERROR,
      });

      getHistory().push('/landing-survey');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: landingSurveyFormActions.CREATE_STARTED,
      });

      console.log("creating survey" + values);
      await LandingSurveyService.create(values);

      dispatch({
        type: landingSurveyFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.landingSurvey.create.success'),
      );

      getHistory().push('/landing-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: landingSurveyFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: landingSurveyFormActions.UPDATE_STARTED,
      });

      await LandingSurveyService.update(id, values);

      dispatch({
        type: landingSurveyFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.landingSurvey.update.success'),
      );

      getHistory().push('/landing-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: landingSurveyFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default landingSurveyFormActions;
