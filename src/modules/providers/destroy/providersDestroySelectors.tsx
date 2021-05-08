import { createSelector } from 'reselect';

const selectRaw = (state) => state.providers.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const providersDestroySelectors = {
  selectLoading,
};

export default providersDestroySelectors;
