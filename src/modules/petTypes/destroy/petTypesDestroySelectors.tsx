import { createSelector } from 'reselect';

const selectRaw = (state) => state.petTypes.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const petTypesDestroySelectors = {
  selectLoading,
};

export default petTypesDestroySelectors;
