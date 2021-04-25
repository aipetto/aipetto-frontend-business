import BusinessPlaceServiceAvailabilityService from 'src/modules/businessPlaceServiceAvailability/businessPlaceServiceAvailabilityService';
import selectors from 'src/modules/businessPlaceServiceAvailability/list/businessPlaceServiceAvailabilityListSelectors';
import { i18n } from 'src/i18n';
import exporterFields from 'src/modules/businessPlaceServiceAvailability/list/businessPlaceServiceAvailabilityListExporterFields';
import Errors from 'src/modules/shared/error/errors';
import Exporter from 'src/modules/shared/exporter/exporter';

const prefix = 'BUSINESSPLACESERVICEAVAILABILITY_LIST';

const businessPlaceServiceAvailabilityListActions = {
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
      type: businessPlaceServiceAvailabilityListActions.CLEAR_ALL_SELECTED,
    };
  },

  doToggleAllSelected() {
    return {
      type: businessPlaceServiceAvailabilityListActions.TOGGLE_ALL_SELECTED,
    };
  },

  doToggleOneSelected(id) {
    return {
      type: businessPlaceServiceAvailabilityListActions.TOGGLE_ONE_SELECTED,
      payload: id,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: businessPlaceServiceAvailabilityListActions.RESETED,
    });

    dispatch(businessPlaceServiceAvailabilityListActions.doFetch());
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: businessPlaceServiceAvailabilityListActions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await BusinessPlaceServiceAvailabilityService.list(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );

      new Exporter(
        exporterFields,
        i18n('entities.businessPlaceServiceAvailability.exporterFileName'),
      ).transformAndExportAsExcelFile(response.rows);

      dispatch({
        type: businessPlaceServiceAvailabilityListActions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: businessPlaceServiceAvailabilityListActions.EXPORT_ERROR,
      });
    }
  },

  doChangePagination: (pagination) => async (
    dispatch,
    getState,
  ) => {
    dispatch({
      type: businessPlaceServiceAvailabilityListActions.PAGINATION_CHANGED,
      payload: pagination,
    });

    dispatch(businessPlaceServiceAvailabilityListActions.doFetchCurrentFilter());
  },

  doChangeSort: (sorter) => async (dispatch, getState) => {
    dispatch({
      type: businessPlaceServiceAvailabilityListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(businessPlaceServiceAvailabilityListActions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter: () => async (
    dispatch,
    getState,
  ) => {
    const filter = selectors.selectFilter(getState());
    const rawFilter = selectors.selectRawFilter(getState());
    dispatch(businessPlaceServiceAvailabilityListActions.doFetch(filter, rawFilter, true));
  },

  doFetch: (filter?, rawFilter?, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: businessPlaceServiceAvailabilityListActions.FETCH_STARTED,
        payload: { filter, rawFilter, keepPagination },
      });

      const response = await BusinessPlaceServiceAvailabilityService.list(
        filter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: businessPlaceServiceAvailabilityListActions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: businessPlaceServiceAvailabilityListActions.FETCH_ERROR,
      });
    }
  },
};

export default businessPlaceServiceAvailabilityListActions;
