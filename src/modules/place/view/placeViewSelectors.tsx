import { createSelector } from 'reselect';

const selectRaw = (state) => state.place.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const placeViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default placeViewSelectors;
