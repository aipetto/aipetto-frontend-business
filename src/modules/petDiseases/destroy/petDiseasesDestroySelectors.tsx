import { createSelector } from 'reselect';

const selectRaw = (state) => state.petDiseases.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const petDiseasesDestroySelectors = {
  selectLoading,
};

export default petDiseasesDestroySelectors;
