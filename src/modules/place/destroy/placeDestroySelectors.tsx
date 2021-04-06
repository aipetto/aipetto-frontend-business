import { createSelector } from 'reselect';

const selectRaw = (state) => state.place.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const placeDestroySelectors = {
  selectLoading,
};

export default placeDestroySelectors;
