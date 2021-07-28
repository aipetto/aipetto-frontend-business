import ContactsService from 'src/modules/contacts/contactsService';
import selectors from 'src/modules/contacts/list/contactsListSelectors';
import { i18n } from 'src/i18n';
import exporterFields from 'src/modules/contacts/list/contactsListExporterFields';
import Errors from 'src/modules/shared/error/errors';
import Exporter from 'src/modules/shared/exporter/exporter';

const prefix = 'CONTACTS_LIST';

const contactsListActions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,

  RESETED: `${prefix}_RESETED`,
  TOGGLE_ONE_SELECTED: `${prefix}_TOGGLE_ONE_SELECTED`,
  TOGGLE_ALL_SELECTED: `${prefix}_TOGGLE_ALL_SELECTED`,
  CLEAR_ALL_SELECTED: `${prefix}_CLEAR_ALL_SELECTED`,

  PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,
  SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,

  EXPORT_STARTED: `${prefix}_EXPORT_STARTED`,
  EXPORT_SUCCESS: `${prefix}_EXPORT_SUCCESS`,
  EXPORT_ERROR: `${prefix}_EXPORT_ERROR`,

  doClearAllSelected() {
    return {
      type: contactsListActions.CLEAR_ALL_SELECTED,
    };
  },

  doToggleAllSelected() {
    return {
      type: contactsListActions.TOGGLE_ALL_SELECTED,
    };
  },

  doToggleOneSelected(id) {
    return {
      type: contactsListActions.TOGGLE_ONE_SELECTED,
      payload: id,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: contactsListActions.RESETED,
    });

    dispatch(contactsListActions.doFetch());
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: contactsListActions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await ContactsService.list(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );

      new Exporter(
        exporterFields,
        i18n('entities.contacts.exporterFileName'),
      ).transformAndExportAsExcelFile(response.rows);

      dispatch({
        type: contactsListActions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: contactsListActions.EXPORT_ERROR,
      });
    }
  },

  doChangePagination: (pagination) => async (
    dispatch,
    getState,
  ) => {
    dispatch({
      type: contactsListActions.PAGINATION_CHANGED,
      payload: pagination,
    });

    dispatch(contactsListActions.doFetchCurrentFilter());
  },

  doChangeSort: (sorter) => async (dispatch, getState) => {
    dispatch({
      type: contactsListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(contactsListActions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter: () => async (
    dispatch,
    getState,
  ) => {
    const filter = selectors.selectFilter(getState());
    const rawFilter = selectors.selectRawFilter(getState());
    dispatch(contactsListActions.doFetch(filter, rawFilter, true));
  },

  doFetch: (filter?, rawFilter?, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: contactsListActions.FETCH_STARTED,
        payload: { filter, rawFilter, keepPagination },
      });

      const response = await ContactsService.list(
        filter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: contactsListActions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: contactsListActions.FETCH_ERROR,
      });
    }
  },
};

export default contactsListActions;
