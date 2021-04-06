import PetTypesService from 'src/modules/petTypes/petTypesService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PETTYPES_FORM';

const petTypesFormActions = {
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
        type: petTypesFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await PetTypesService.find(id);
      }

      dispatch({
        type: petTypesFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: petTypesFormActions.INIT_ERROR,
      });

      getHistory().push('/pet-types');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: petTypesFormActions.CREATE_STARTED,
      });

      await PetTypesService.create(values);

      dispatch({
        type: petTypesFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.petTypes.create.success'),
      );

      getHistory().push('/pet-types');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: petTypesFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: petTypesFormActions.UPDATE_STARTED,
      });

      await PetTypesService.update(id, values);

      dispatch({
        type: petTypesFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.petTypes.update.success'),
      );

      getHistory().push('/pet-types');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: petTypesFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default petTypesFormActions;
