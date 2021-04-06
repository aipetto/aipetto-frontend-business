import PetService from 'src/modules/pet/petService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PET_FORM';

const petFormActions = {
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
        type: petFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await PetService.find(id);
      }

      dispatch({
        type: petFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: petFormActions.INIT_ERROR,
      });

      getHistory().push('/pet');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: petFormActions.CREATE_STARTED,
      });

      await PetService.create(values);

      dispatch({
        type: petFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.pet.create.success'),
      );

      getHistory().push('/pet');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: petFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: petFormActions.UPDATE_STARTED,
      });

      await PetService.update(id, values);

      dispatch({
        type: petFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.pet.update.success'),
      );

      getHistory().push('/pet');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: petFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default petFormActions;
