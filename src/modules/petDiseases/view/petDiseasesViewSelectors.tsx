import { createSelector } from 'reselect';

const selectRaw = (state) => state.petDiseases.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const petDiseasesViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default petDiseasesViewSelectors;
