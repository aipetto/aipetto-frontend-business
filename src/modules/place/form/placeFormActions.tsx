import PlaceService from 'src/modules/place/placeService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PLACE_FORM';

const placeFormActions = {
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
        type: placeFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await PlaceService.find(id);
      }

      dispatch({
        type: placeFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: placeFormActions.INIT_ERROR,
      });

      getHistory().push('/place');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: placeFormActions.CREATE_STARTED,
      });

      await PlaceService.create(values);

      dispatch({
        type: placeFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.place.create.success'),
      );

      getHistory().push('/place');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: placeFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: placeFormActions.UPDATE_STARTED,
      });

      await PlaceService.update(id, values);

      dispatch({
        type: placeFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.place.update.success'),
      );

      getHistory().push('/place');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: placeFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default placeFormActions;
