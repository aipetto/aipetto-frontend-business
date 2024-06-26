import { createSelector } from 'reselect';

const selectRaw = (state) => state.questions.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const questionsViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default questionsViewSelectors;
