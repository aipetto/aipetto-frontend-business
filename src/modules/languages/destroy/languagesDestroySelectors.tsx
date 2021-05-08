import { createSelector } from 'reselect';

const selectRaw = (state) => state.languages.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const languagesDestroySelectors = {
  selectLoading,
};

export default languagesDestroySelectors;
