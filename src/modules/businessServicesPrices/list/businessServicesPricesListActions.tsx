import BusinessServicesPricesService from 'src/modules/businessServicesPrices/businessServicesPricesService';
import selectors from 'src/modules/businessServicesPrices/list/businessServicesPricesListSelectors';
import { i18n } from 'src/i18n';
import exporterFields from 'src/modules/businessServicesPrices/list/businessServicesPricesListExporterFields';
import Errors from 'src/modules/shared/error/errors';
import Exporter from 'src/modules/shared/exporter/exporter';

const prefix = 'BUSINESSSERVICESPRICES_LIST';

const businessServicesPricesListActions = {
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
      type: businessServicesPricesListActions.CLEAR_ALL_SELECTED,
    };
  },

  doToggleAllSelected() {
    return {
      type: businessServicesPricesListActions.TOGGLE_ALL_SELECTED,
    };
  },

  doToggleOneSelected(id) {
    return {
      type: businessServicesPricesListActions.TOGGLE_ONE_SELECTED,
      payload: id,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: businessServicesPricesListActions.RESETED,
    });

    dispatch(businessServicesPricesListActions.doFetch());
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: businessServicesPricesListActions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await BusinessServicesPricesService.list(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );

      new Exporter(
        exporterFields,
        i18n('entities.businessServicesPrices.exporterFileName'),
      ).transformAndExportAsExcelFile(response.rows);

      dispatch({
        type: businessServicesPricesListActions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: businessServicesPricesListActions.EXPORT_ERROR,
      });
    }
  },

  doChangePagination: (pagination) => async (
    dispatch,
    getState,
  ) => {
    dispatch({
      type: businessServicesPricesListActions.PAGINATION_CHANGED,
      payload: pagination,
    });

    dispatch(businessServicesPricesListActions.doFetchCurrentFilter());
  },

  doChangeSort: (sorter) => async (dispatch, getState) => {
    dispatch({
      type: businessServicesPricesListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(businessServicesPricesListActions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter: () => async (
    dispatch,
    getState,
  ) => {
    const filter = selectors.selectFilter(getState());
    const rawFilter = selectors.selectRawFilter(getState());
    dispatch(businessServicesPricesListActions.doFetch(filter, rawFilter, true));
  },

  doFetch: (filter?, rawFilter?, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: businessServicesPricesListActions.FETCH_STARTED,
        payload: { filter, rawFilter, keepPagination },
      });

      const response = await BusinessServicesPricesService.list(
        filter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: businessServicesPricesListActions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: businessServicesPricesListActions.FETCH_ERROR,
      });
    }
  },
};

export default businessServicesPricesListActions;
