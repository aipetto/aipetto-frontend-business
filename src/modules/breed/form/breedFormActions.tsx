import BreedService from 'src/modules/breed/breedService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'BREED_FORM';

const breedFormActions = {
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
        type: breedFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await BreedService.find(id);
      }

      dispatch({
        type: breedFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: breedFormActions.INIT_ERROR,
      });

      getHistory().push('/breed');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: breedFormActions.CREATE_STARTED,
      });

      await BreedService.create(values);

      dispatch({
        type: breedFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.breed.create.success'),
      );

      getHistory().push('/breed');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: breedFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: breedFormActions.UPDATE_STARTED,
      });

      await BreedService.update(id, values);

      dispatch({
        type: breedFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.breed.update.success'),
      );

      getHistory().push('/breed');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: breedFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default breedFormActions;
