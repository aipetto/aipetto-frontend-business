import { createSelector } from 'reselect';

const selectRaw = (state) => state.reservationAgenda.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const reservationAgendaDestroySelectors = {
  selectLoading,
};

export default reservationAgendaDestroySelectors;
