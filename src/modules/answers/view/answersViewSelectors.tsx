import { createSelector } from 'reselect';

const selectRaw = (state) => state.answers.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const answersViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default answersViewSelectors;
