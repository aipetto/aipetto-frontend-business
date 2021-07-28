import ContactsService from 'src/modules/contacts/contactsService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'CONTACTS_VIEW';

const contactsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: contactsViewActions.FIND_STARTED,
      });

      const record = await ContactsService.find(id);

      dispatch({
        type: contactsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: contactsViewActions.FIND_ERROR,
      });

      getHistory().push('/contacts');
    }
  },
};

export default contactsViewActions;
