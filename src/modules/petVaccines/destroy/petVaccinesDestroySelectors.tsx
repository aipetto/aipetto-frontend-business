import { createSelector } from 'reselect';

const selectRaw = (state) => state.petVaccines.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const petVaccinesDestroySelectors = {
  selectLoading,
};

export default petVaccinesDestroySelectors;
