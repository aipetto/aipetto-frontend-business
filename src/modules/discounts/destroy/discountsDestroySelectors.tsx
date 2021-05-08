import { createSelector } from 'reselect';

const selectRaw = (state) => state.discounts.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const discountsDestroySelectors = {
  selectLoading,
};

export default discountsDestroySelectors;
