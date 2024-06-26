import { createSelector } from 'reselect';

const selectRaw = (state) => state.petVaccines.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const petVaccinesViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default petVaccinesViewSelectors;
