import { createSelector } from 'reselect';

const selectRaw = (state) => state.businessPlaceServiceAvailability.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const businessPlaceServiceAvailabilityDestroySelectors = {
  selectLoading,
};

export default businessPlaceServiceAvailabilityDestroySelectors;
