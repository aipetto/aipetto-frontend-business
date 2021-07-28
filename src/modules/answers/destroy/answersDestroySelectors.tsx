import { createSelector } from 'reselect';

const selectRaw = (state) => state.answers.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const answersDestroySelectors = {
  selectLoading,
};

export default answersDestroySelectors;
