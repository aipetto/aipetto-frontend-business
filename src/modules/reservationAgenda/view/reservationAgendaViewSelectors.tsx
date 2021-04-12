import { createSelector } from 'reselect';

const selectRaw = (state) => state.reservationAgenda.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const reservationAgendaViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default reservationAgendaViewSelectors;
