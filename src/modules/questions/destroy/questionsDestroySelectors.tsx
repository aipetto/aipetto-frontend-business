import { createSelector } from 'reselect';

const selectRaw = (state) => state.questions.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const questionsDestroySelectors = {
  selectLoading,
};

export default questionsDestroySelectors;
