import { createSelector } from 'reselect';

const selectRaw = (state) => state.providers.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const providersViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default providersViewSelectors;
