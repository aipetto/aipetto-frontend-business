import listActions from 'src/modules/petExamination/list/petExaminationListActions';
import PetExaminationService from 'src/modules/petExamination/petExaminationService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PETEXAMINATION_DESTROY';

const petExaminationDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: petExaminationDestroyActions.DESTROY_STARTED,
      });

      await PetExaminationService.destroyAll([id]);

      dispatch({
        type: petExaminationDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.petExamination.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/pet-examination');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: petExaminationDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: petExaminationDestroyActions.DESTROY_ALL_STARTED,
      });

      await PetExaminationService.destroyAll(ids);

      dispatch({
        type: petExaminationDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.petExamination.destroyAll.success'),
      );

      getHistory().push('/pet-examination');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: petExaminationDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default petExaminationDestroyActions;
