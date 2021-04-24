import { createSelector } from 'reselect';

const selectRaw = (state) => state.professionalsServiceAvailability.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const professionalsServiceAvailabilityViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default professionalsServiceAvailabilityViewSelectors;
