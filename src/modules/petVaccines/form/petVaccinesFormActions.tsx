import PetVaccinesService from 'src/modules/petVaccines/petVaccinesService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PETVACCINES_FORM';

const petVaccinesFormActions = {
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
        type: petVaccinesFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await PetVaccinesService.find(id);
      }

      dispatch({
        type: petVaccinesFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: petVaccinesFormActions.INIT_ERROR,
      });

      getHistory().push('/pet-vaccines');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: petVaccinesFormActions.CREATE_STARTED,
      });

      await PetVaccinesService.create(values);

      dispatch({
        type: petVaccinesFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.petVaccines.create.success'),
      );

      getHistory().push('/pet-vaccines');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: petVaccinesFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: petVaccinesFormActions.UPDATE_STARTED,
      });

      await PetVaccinesService.update(id, values);

      dispatch({
        type: petVaccinesFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.petVaccines.update.success'),
      );

      getHistory().push('/pet-vaccines');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: petVaccinesFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default petVaccinesFormActions;
