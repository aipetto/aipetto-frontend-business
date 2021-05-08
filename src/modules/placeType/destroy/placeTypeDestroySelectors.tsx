import { createSelector } from 'reselect';

const selectRaw = (state) => state.placeType.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const placeTypeDestroySelectors = {
  selectLoading,
};

export default placeTypeDestroySelectors;
