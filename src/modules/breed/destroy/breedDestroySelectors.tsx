import { createSelector } from 'reselect';

const selectRaw = (state) => state.breed.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const breedDestroySelectors = {
  selectLoading,
};

export default breedDestroySelectors;
