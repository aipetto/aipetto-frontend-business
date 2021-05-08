import { createSelector } from 'reselect';

const selectRaw = (state) => state.placeType.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const placeTypeViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default placeTypeViewSelectors;
