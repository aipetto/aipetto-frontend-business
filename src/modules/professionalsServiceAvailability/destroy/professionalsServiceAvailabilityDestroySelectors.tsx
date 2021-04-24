import { createSelector } from 'reselect';

const selectRaw = (state) => state.professionalsServiceAvailability.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const professionalsServiceAvailabilityDestroySelectors = {
  selectLoading,
};

export default professionalsServiceAvailabilityDestroySelectors;
