import { createSelector } from 'reselect';

const selectRaw = (state) => state.serviceReservation.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const serviceReservationDestroySelectors = {
  selectLoading,
};

export default serviceReservationDestroySelectors;
