import listActions from 'src/modules/businessServicesTypes/list/businessServicesTypesListActions';
import BusinessServicesTypesService from 'src/modules/businessServicesTypes/businessServicesTypesService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'BUSINESSSERVICESTYPES_DESTROY';

const businessServicesTypesDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: businessServicesTypesDestroyActions.DESTROY_STARTED,
      });

      await BusinessServicesTypesService.destroyAll([id]);

      dispatch({
        type: businessServicesTypesDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.businessServicesTypes.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/business-services-types');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: businessServicesTypesDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: businessServicesTypesDestroyActions.DESTROY_ALL_STARTED,
      });

      await BusinessServicesTypesService.destroyAll(ids);

      dispatch({
        type: businessServicesTypesDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.businessServicesTypes.destroyAll.success'),
      );

      getHistory().push('/business-services-types');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: businessServicesTypesDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default businessServicesTypesDestroyActions;
