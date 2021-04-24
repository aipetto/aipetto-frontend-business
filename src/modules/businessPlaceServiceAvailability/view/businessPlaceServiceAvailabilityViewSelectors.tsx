import { createSelector } from 'reselect';

const selectRaw = (state) => state.businessPlaceServiceAvailability.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const businessPlaceServiceAvailabilityViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default businessPlaceServiceAvailabilityViewSelectors;
