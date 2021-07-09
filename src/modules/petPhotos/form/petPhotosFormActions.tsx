import PetPhotosService from 'src/modules/petPhotos/petPhotosService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PETPHOTOS_FORM';

const petPhotosFormActions = {
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
        type: petPhotosFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await PetPhotosService.find(id);
      }

      dispatch({
        type: petPhotosFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: petPhotosFormActions.INIT_ERROR,
      });

      getHistory().push('/pet-photos');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: petPhotosFormActions.CREATE_STARTED,
      });

      await PetPhotosService.create(values);

      dispatch({
        type: petPhotosFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.petPhotos.create.success'),
      );

      getHistory().push('/pet-photos');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: petPhotosFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: petPhotosFormActions.UPDATE_STARTED,
      });

      await PetPhotosService.update(id, values);

      dispatch({
        type: petPhotosFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.petPhotos.update.success'),
      );

      getHistory().push('/pet-photos');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: petPhotosFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default petPhotosFormActions;
