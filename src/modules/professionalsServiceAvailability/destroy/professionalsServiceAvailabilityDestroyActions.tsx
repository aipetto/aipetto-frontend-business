import listActions from 'src/modules/professionalsServiceAvailability/list/professionalsServiceAvailabilityListActions';
import ProfessionalsServiceAvailabilityService from 'src/modules/professionalsServiceAvailability/professionalsServiceAvailabilityService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PROFESSIONALSSERVICEAVAILABILITY_DESTROY';

const professionalsServiceAvailabilityDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: professionalsServiceAvailabilityDestroyActions.DESTROY_STARTED,
      });

      await ProfessionalsServiceAvailabilityService.destroyAll([id]);

      dispatch({
        type: professionalsServiceAvailabilityDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.professionalsServiceAvailability.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/professionals-service-availability');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: professionalsServiceAvailabilityDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: professionalsServiceAvailabilityDestroyActions.DESTROY_ALL_STARTED,
      });

      await ProfessionalsServiceAvailabilityService.destroyAll(ids);

      dispatch({
        type: professionalsServiceAvailabilityDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.professionalsServiceAvailability.destroyAll.success'),
      );

      getHistory().push('/professionals-service-availability');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: professionalsServiceAvailabilityDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default professionalsServiceAvailabilityDestroyActions;
