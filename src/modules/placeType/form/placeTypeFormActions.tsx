import PlaceTypeService from 'src/modules/placeType/placeTypeService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PLACETYPE_FORM';

const placeTypeFormActions = {
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
        type: placeTypeFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await PlaceTypeService.find(id);
      }

      dispatch({
        type: placeTypeFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: placeTypeFormActions.INIT_ERROR,
      });

      getHistory().push('/place-type');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: placeTypeFormActions.CREATE_STARTED,
      });

      await PlaceTypeService.create(values);

      dispatch({
        type: placeTypeFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.placeType.create.success'),
      );

      getHistory().push('/place-type');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: placeTypeFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: placeTypeFormActions.UPDATE_STARTED,
      });

      await PlaceTypeService.update(id, values);

      dispatch({
        type: placeTypeFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.placeType.update.success'),
      );

      getHistory().push('/place-type');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: placeTypeFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default placeTypeFormActions;
