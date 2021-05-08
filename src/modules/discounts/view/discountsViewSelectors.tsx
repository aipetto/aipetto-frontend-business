import { createSelector } from 'reselect';

const selectRaw = (state) => state.discounts.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const discountsViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default discountsViewSelectors;
