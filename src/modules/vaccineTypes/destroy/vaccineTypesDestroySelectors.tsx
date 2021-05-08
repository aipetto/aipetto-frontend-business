import { createSelector } from 'reselect';

const selectRaw = (state) => state.vaccineTypes.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const vaccineTypesDestroySelectors = {
  selectLoading,
};

export default vaccineTypesDestroySelectors;
